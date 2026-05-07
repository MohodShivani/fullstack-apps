const { z } = require("zod");

const signupSchema = z.object({
  email: z.string().min(3),
  name: z.string().min(3),
  password: z.string().min(3)
});

module.exports = signupSchema;
