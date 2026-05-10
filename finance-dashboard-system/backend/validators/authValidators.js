const { z } = require("zod");

const roleEnum = z.enum(["viewer", "analyst", "admin"]);

// Signup validation
const signupSchema = z.object({
  userName: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be less than 20 characters")
    .trim(),

  email: z
    .string()
    .email("Invalid email format")
    .trim()
    .toLowerCase(),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(100),

  role: roleEnum.optional(), // default handled in DB
});

// Signin validation
const signinSchema = z.object({
  email: z
    .string()
    .email("Invalid email format")
    .trim()
    .toLowerCase(),

  password: z
    .string()
    .min(6, "Password is required"),
});

module.exports={
    
    signupSchema,
    signinSchema
}