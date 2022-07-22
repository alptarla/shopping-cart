const createHttpError = require("http-errors");
const mongoose = require("mongoose");
const Cart = require("../models/Cart");

async function getCart(req, res, next) {
  console.log(req.userId);
  try {
    const cart = await Cart.findOne({
      user: req.userId,
    });

    if (!cart) {
      next(createHttpError(404));
      return;
    }

    await cart.populate([
      "products.product",
      { path: "user", select: "-password" },
    ]);

    res.status(200).json({ cart });
  } catch (error) {
    next(createHttpError(500));
  }
}

async function removeProductFromCart(req, res, next) {
  const { productId } = req.params;

  try {
    const cart = await Cart.findOne({
      user: req.userId,
    });

    if (!cart) {
      next(createHttpError(404));
      return;
    }

    const productIndexInCart = cart.products.findIndex((item) => {
      return mongoose.Types.ObjectId(item.product._id).toString() === productId;
    });

    if (productIndexInCart === -1) {
      next(createHttpError(404));
      return;
    }

    if (cart.products[productIndexInCart].quantity > 1) {
      cart.products[productIndexInCart].quantity--;
    } else {
      cart.products.splice(productIndexInCart, 1);
    }

    await cart.save();
    await cart.populate([
      "products.product",
      { path: "user", select: "-password" },
    ]);

    res.status(200).json({ cart });
  } catch (error) {
    next(createHttpError(500));
  }
}

async function addProductToCart(req, res, next) {
  const { productId } = req.params;

  if (!mongoose.isValidObjectId(productId)) {
    next(createHttpError(400));
    return;
  }

  try {
    let cart = await Cart.findOne({ user: req.userId });

    if (!cart) {
      cart = new Cart({
        user: req.userId,
        products: [],
      });
    }

    const productIndexInCart = cart.products.findIndex((item) => {
      return mongoose.Types.ObjectId(item.product._id).toString() === productId;
    });

    if (productIndexInCart === -1) {
      cart.products.push({ product: productId, quantity: 1 });
    } else {
      cart.products[productIndexInCart].quantity++;
    }

    await cart.save();
    await cart.populate([
      "products.product",
      { path: "user", select: "-password" },
    ]);

    res.status(201).json({ cart });
  } catch (error) {
    next(createHttpError(500));
  }
}

async function clearCart(req, res, next) {
  try {
    const cart = await Cart.findOne({ user: req.userId });
    if (!cart) return next(createHttpError(404));

    cart.products = [];
    await cart.save();

    console.log("cart", cart);

    res.sendStatus(200);
  } catch (error) {
    next(createHttpError(500));
  }
}

module.exports = {
  getCart,
  addProductToCart,
  removeProductFromCart,
  clearCart,
};
