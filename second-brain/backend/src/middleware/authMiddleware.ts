import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "../config/env.js";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const header = req.headers["authorization"];

    if (!header || !header.startsWith("Bearer ")) {
      return res.status(403).json({
        message: "Invalid token format"
      });
    }

    const token = header.split(" ")[1];

    // ✅ FIX: ensure token is string
    if (!token) {
      return res.status(403).json({
        message: "Token missing"
      });
    }

    const decoded = jwt.verify(token, JWT_PASSWORD);

    if (typeof decoded === "string") {
      return res.status(403).json({
        message: "Invalid token"
      });
    }

    req.userId = decoded.id;

    next();

  } catch (err) {
    return res.status(403).json({
      message: "Invalid or expired token"
    });
  }
};