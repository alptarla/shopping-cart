const express = require("express");
const createHttpError = require("http-errors");
const validator = require("express-joi-validation").createValidator();
const joi = require("joi");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const router = express.Router();

const registerSchema = joi.object({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  birthDate: joi.date().required(),
  location: joi
    .object()
    .keys({
      countryCode: joi.number().required(),
      cityCode: joi.number().required(),
    })
    .required(),
});

router.post(
  "/register",
  validator.body(registerSchema),
  async (req, res, next) => {
    const { email } = req.body;

    try {
      const exisitingUser = await User.findOne({ email });
      if (exisitingUser) {
        next(createHttpError(400, "User already exist"));
        return;
      }

      const newUser = await User.create({ ...req.body });
      const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "1h",
      });

      res.status(201).json({ token, user: newUser });
    } catch (error) {
      next(createHttpError(500));
    }
  }
);

module.exports = router;
