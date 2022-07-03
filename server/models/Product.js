const mongoose = require("mongoose");

const ProductModel = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  rating: {
    rate: {
      type: Number,
      default: 0,
    },
    count: {
      type: Number,
      default: 0,
    },
  },
});

module.exports = mongoose.model("Product", ProductModel);
