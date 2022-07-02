const express = require("express");
const validator = require("express-joi-validation").createValidator();

const { registerSchema, loginSchema } = require("../validations");
const {
  userRegister,
  userLogin,
  currentUser,
} = require("../controller/authController");

const router = express.Router();

router.post("/register", validator.body(registerSchema), userRegister);
router.post("/login", validator.body(loginSchema), userLogin);
router.get("/", currentUser);

module.exports = router;
