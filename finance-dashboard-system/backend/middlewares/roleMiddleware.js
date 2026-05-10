const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    try {
      if (!req.user || !req.user.role) {
        return res.status(401).json({
          message: "Unauthorized: No user data"
        });
      }

      if (!roles.includes(req.user.role)) {
        return res.status(403).json({
          message: "Access denied"
        });
      }

      next();
      
    } catch (error) {
      res.status(500).json({
        message: "Authorization error",
        error: error.message
      });
    }
  };
};

module.exports = authorizeRoles;