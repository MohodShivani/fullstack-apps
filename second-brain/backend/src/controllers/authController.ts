import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User }  from "../models/User.js";
import { signupSchema, signinSchema } from "../validators/authValidator.js";
import type { Request, Response } from "express";
import { JWT_PASSWORD } from "../config/env.js";

export const signup = async (req: Request, res: Response) => {
  const parsed = signupSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.json({
      message: "Incorrect Format",
      error: parsed.error
    });
  }

  // ✅ USE parsed.data
  let { username, password } = parsed.data;

  // ✅ Normalize
  username = username.trim().toLowerCase();
  password = password.trim();

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      username,
      password: hashedPassword
    });

    res.json({ message: "You are signed up!" });

  } catch (error) {
    res.status(409).json({
      message: "User already exists!"
    });
  }
};

export const signin = async (req: Request, res: Response) => {
  const parsed = signinSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      message: "Invalid input",
      error: parsed.error
    });
  }

  let { username, password } = parsed.data;

  // ✅ Normalize same way
  username = username.trim().toLowerCase();
  password = password.trim();

  const user = await User.findOne({ username });

  if (!user || !user.password) {
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

  const token = jwt.sign(
    { id: user._id.toString() },
    JWT_PASSWORD
  );

  res.json({ token });
};