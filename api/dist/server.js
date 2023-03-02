require("dotenv").config({
  path: __dirname + "/.env"
});
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");
const path = require("path");
mongoose.connect(process.env.MONGO_URI).then(() => console.log("connected")).catch(err => {
  console.log(err);
});
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});

// __dirname = path.resolve();
// app.use(express.static(path.join(__dirname, '/shop-frontend/build')));
// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, 'shop-frontend/build/index.html')));