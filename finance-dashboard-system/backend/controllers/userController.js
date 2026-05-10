const  User  = require("../models/User");
const { roleSchema } = require("../validators/userValidator");

// Get all users (admin only)
const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password"); 

    res.json(users);
  } catch (err) {
    res.status(500).json({
      message: "Server error"
    });
  }
};

// Update role
const updateRole = async (req, res) => {
  try {
    const { role } = req.body; 
    const userId = req.params.id;

    if (req.user.id === userId) {
      return res.status(400).json({
        message: "You cannot change your own role"
      });
    }

    const user = await User.findByIdAndUpdate(
      userId,
      { role },
      { new: true }
    ).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.json({
      message: "Role updated successfully",
      user
    });

  } catch (error) {
    res.status(500).json({
      message: "Error updating role",
      error: error.message
    });
  }
};

// Update status
const updateStatus = async (req, res) => {
  try {
    const { status } = req.body; 
    const userId = req.params.id;
    
    if (req.user.id === userId) {
      return res.status(400).json({
        message: "You cannot change your own status"
      });
    }

    const user = await User.findByIdAndUpdate(
      userId,
      { status },
      { new: true }
    ).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.json({
      message: "Status updated successfully",
      user
    });

  } catch (error) {
    res.status(500).json({
      message: "Error updating status",
      error: error.message
    });
  }
};

    
     

module.exports = { getUsers, updateRole, updateStatus };