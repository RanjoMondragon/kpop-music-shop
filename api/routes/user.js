const User = require("../models/User");
const { verifyToken, verifyTokenandAuthorization, verifyTokenandAdmin } = require("./verifyToken");

const router = require("express").Router();

//UPDATE
router.put("/:id", verifyTokenandAuthorization, async (req,res) => {
    if(req.body.password){
      req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();
    }
  
    try{
        // Check if user exists
        const userToUpdate = await User.findById(req.params.id);
        if (!userToUpdate) {
            return res.status(404).json({ message: "User not found" });
        }
    
        // Check if the user is authorized to update their own account
        if (userToUpdate._id.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: "Unauthorized" });
        }
    
        // Update the user object with the new data
        userToUpdate.firstName = req.body.firstName;
        userToUpdate.lastName = req.body.lastName;
        userToUpdate.email = req.body.email;
        userToUpdate.phone = req.body.phone;
    
        // Save the updated user object
        const updatedUser = await userToUpdate.save();
    
        res.status(200).json(updatedUser);
        } catch(err){
        res.status(500).json(err);
    }
});
  

//DELETE
router.delete("/:id", verifyTokenandAuthorization, async (req,res) => {
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted.");
    } catch(err){
        res.status(500).json(err);
    }
});

//GET ALL USERS
router.get("/", verifyTokenandAdmin, async (req,res) => {
    const query = req.query.new;
    try{
        const users = query? await User.find().sort({_id:-1}).limit(5) : await User.find();
        res.status(200).json(users);
    } catch(err){
        res.status(500).json(err);
    }
});

//GET USER STATS
router.get("/stats", verifyTokenandAdmin, async (req,res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear()-1));
    try{
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear}}},
            {
                $project: {
                    month: {$month: "$createdAt"},
                },
            },
            {
                $group: {
                    _id: "$month",
                    total:{$sum:1},
                },
            }
        ]);
        res.status(200).json(data);
    } catch(err){
        res.status(500).json(err);
    }
});

//localhost:5000/api/users/userposttest

module.exports=router;