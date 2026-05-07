const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const signupSchema = require("../validators/authValidator");

exports.signup = async (req, res) => {
  const parsed = signupSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.json({
      message: "Incorrect Format",
      error: parsed.error
    });
  }

  const { email, password, name } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 5);

    await User.create({
      email,
      password: hashedPassword,
      name
    });

    res.json({ 
      message: "You are signed up!" 
    });
  } catch (error) {
    res.status(409).json({ 
      message: "User already exists!" 
    });
  }
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ 
    email 
  });
  
  if (!user) {
    return res.status(403).json({ 
      message: "User not found" 
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(403).json({
      message: "Incorrect Credentials" 
    });
  }

  const token = jwt.sign({ 
    id: user._id.toString() 
  },process.env.JWT_SECRET);
  
  res.json({ 
    token 
  });
};
