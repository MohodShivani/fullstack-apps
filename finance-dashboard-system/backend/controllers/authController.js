const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { signupSchema , signinSchema } = require("../validators/authValidators")

exports.signup = async (req, res) => {
  const parsed = signupSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.json({
      message: "Incorrect format",
    });
  }

  const { userName, email, password } = parsed.data;

  try {
    
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      userName,
      email,
      password: hashedPassword
    });

    res.json({
      message: "You are signed up"
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Internal server error"
    });
  }
};

exports.signin = async (req, res) => {
  const parsed = signinSchema.safeParse(req.body)

  if(!parsed.success){
    res.json({
       message:"Invalid credentials"
    })
  }

  try {
    const { email, password } = parsed.data;

    const user = await User.findOne({ 
      email 
    });
    
    if(!user) {
      return res.status(403).json({ 
        message: "User not found" 
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(403).json({ 
        message: "Invalid credentials" 
      });

    const token = jwt.sign({ 
      id: user._id, 
      role: user.role 
    },process.env.JWT_PASSWORD);

    res.json({ 
      token 
    });
    

  } catch (err) {
    res.status(500).json({ 
      message:"Invalid credentials", 
    });
  }
};

