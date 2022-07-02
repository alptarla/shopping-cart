const express = require("express");
const validator = require("express-joi-validation").createValidator();

const { registerSchema } = require("../validations");
const { userRegister } = require("../controller/authController");

const router = express.Router();

router.post("/register", validator.body(registerSchema), userRegister);

module.exports = router;
