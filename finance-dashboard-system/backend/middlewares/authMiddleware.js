const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "No token provided"
    });
  }

  const token = authHeader.split(" ")[1].trim();

  try {
    const decoded = jwt.verify(token, process.env.JWT_PASSWORD);
    
    const user = await User.findById(decoded.id).select("_id role");

    if (!user) {
      return res.status(401).json({
        message: "User not found"
      });
    }

    req.user = {
      id: user._id.toString(),
      role: user.role
    };

    next();

  } catch (err) {
    
    if (err.name === "TokenExpiredError") {
      return res.status(403).json({
        message: "Token expired"
      });
    }

    res.status(403).json({
      message: "Invalid token"
    });
  }
};

module.exports = authMiddleware;