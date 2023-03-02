"use strict";

const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  desc: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  category: {
    type: String
  },
  artist: {
    type: String
  },
  versions: {
    type: Array
  },
  company: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  inStock: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});
module.exports = mongoose.model("Product", ProductSchema);