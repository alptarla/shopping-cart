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

    res.status(201).json({ token });
  } catch (error) {
    next(createHttpError(500));
  }
}

async function userLogin(req, res, next) {
  const { email, password } = req.body;

  const exisitingUser = await User.findOne({ email });
  if (!exisitingUser) {
    next(createHttpError(401, "Wrong credentials"));
    return;
  }

  if (!exisitingUser.checkPassword(password)) {
    next(createHttpError(401, "Wrong credentials"));
    return;
  }

  const token = createToken({ id: exisitingUser.id });

  res.status(200).json({ token });
}

module.exports = {
  userRegister,
  userLogin,
};
