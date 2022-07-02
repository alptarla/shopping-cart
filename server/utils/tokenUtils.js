const jwt = require("jsonwebtoken");

const EXPIRES_IN = "1H";

function createToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: EXPIRES_IN,
  });
}

async function getPayloadFromToken(headers) {
  if (!headers.authorization) return;

  const token = headers.authorization.split(" ")[1];
  if (!token) return;

  return jwt.verify(token, process.env.JWT_SECRET_KEY);
}

module.exports = {
  createToken,
  getPayloadFromToken,
};
