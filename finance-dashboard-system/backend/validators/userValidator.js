const { z } = require("zod");

const roleSchema = z.object({
  role: z.enum(["viewer", "analyst", "admin"])
});

const statusSchema = z.object({
  status: z.enum(["active", "inactive"])
});

module.exports = { 
    roleSchema, 
    statusSchema 
};