const express = require("express");
const {
  getCart,
  addProductToCart,
  removeProductFromCart,
  clearCart,
} = require("../controller/cartController");
const checkAuth = require("../middleware/checkAuth");

const router = express.Router();

router.get("/", checkAuth, getCart);
router.post("/:productId", checkAuth, addProductToCart);
router.delete("/:productId", checkAuth, removeProductFromCart);
router.delete("/", checkAuth, clearCart);

module.exports = router;
