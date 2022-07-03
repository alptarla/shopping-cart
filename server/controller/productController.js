const createHttpError = require("http-errors");
const mongoose = require("mongoose");
const Product = require("../models/Product");

async function getProducts(req, res, next) {
  try {
    const products = await Product.find();
    res.status(200).json({ products });
  } catch (error) {
    next(createHttpError(500));
  }
}

async function getProductById(req, res, next) {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    next(createHttpError(400));
    return;
  }

  try {
    const product = await Product.findById(id);

    if (!product) {
      next(createHttpError(404));
      return;
    }

    res.status(200).json({ product });
  } catch (error) {
    next(createHttpError(500));
  }
}

module.exports = {
  getProducts,
  getProductById,
};
