const express = require("express");
const {
  getCart,
  addProductToCart,
  removeProductFromCart,
} = require("../controller/cartController");
const checkAuth = require("../middleware/checkAuth");

const router = express.Router();

router.get("/", checkAuth, getCart);
router.post("/:productId", checkAuth, addProductToCart);
router.delete("/:productId", checkAuth, removeProductFromCart);

module.exports = router;
