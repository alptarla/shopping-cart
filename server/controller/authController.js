const createHttpError = require("http-errors");
const User = require("../models/User");
const { createToken } = require("../utils/tokenUtils");

async function userRegister(req, res, next) {
  const { email } = req.body;

  try {
    const exisitingUser = await User.findOne({ email });
    if (exisitingUser) {
      next(createHttpError(400, "User already exist"));
      return;
    }

    const newUser = await User.create({ ...req.body });
    const token = createToken({ id: newUser.id });

    res.status(201).json({ token, user: newUser });
  } catch (error) {
    next(createHttpError(500));
  }
}

module.exports = {
  userRegister,
};
