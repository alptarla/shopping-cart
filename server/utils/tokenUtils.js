const jwt = require("jsonwebtoken");

const EXPIRES_IN = "1H";

function createToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: EXPIRES_IN,
  });
}

module.exports = {
  createToken,
};
