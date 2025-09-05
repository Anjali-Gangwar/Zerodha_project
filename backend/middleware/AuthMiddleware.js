const User = require("../model/UserModel");
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(401).json({ message: "Unauthorized" });

    req.user = user; // pass user to next middleware
    next();
  } catch (err) {
    res.status(401).json({ message: "Unauthorized" });
  }
};
