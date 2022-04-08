const jwt = require("jsonwebtoken");
const User = require("../models/users");

// vérifier que le token est valide
module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "USER_TOKEN_SECRET");
    const userId = decodedToken.userId;
    let result = await User.findOne(userId);
    const user = result[0][0];
    req.auth = user;
    if (result && user.id !== userId) {
      throw "Invalid user ID";
    } else {
      next();
    }
  } catch {
    res.status(403).json({
      error: new Error("Unauthorized request"),
    });
  }
};
