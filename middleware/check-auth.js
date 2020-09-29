const HttpError = require("../model/http-error");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      throw new Error("Authorization Error");
    }
    const decodedToken = jwtt.verify(token, "creds_secret_token_string");
    req.userData = { _id: decodedToken._id };
    next();
  } catch (err) {
    const error = new HttpError("Authorization Failed", 401);
    return next(error);
  }
};
