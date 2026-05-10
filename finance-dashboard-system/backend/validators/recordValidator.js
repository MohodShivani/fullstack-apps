const { z } = require("zod");

const createRecordSchema = z.object({
  amount: z.number().positive(),
  type: z.enum(["income", "expense"]),
  category: z.string().min(2),
  date: z.string().optional(),
  note: z.string().optional()
});

const updateRecordSchema = z.object({
  amount: z.number().positive().optional(),
  type: z.enum(["income", "expense"]).optional(),
  category: z.string().optional(),
  date: z.string().optional(),
  note: z.string().optional()
});

module.exports = {
  createRecordSchema,
  updateRecordSchema
};
