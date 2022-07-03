const { getPayloadFromToken } = require("../utils/tokenUtils");
const createHttpError = require("http-errors");

async function checkAuth(req, res, next) {
  try {
    const tokenPayload = await getPayloadFromToken(req.headers);

    if (!tokenPayload?.id) {
      next(createHttpError(401));
      return;
    }

    req.userId = tokenPayload.id;
    next();
  } catch (error) {
    next(createHttpError(401));
  }
}

module.exports = checkAuth;
