import { Router } from "express";
import { createTransaction, getTransaction, updateTransaction, deleteTransaction } from "../controllers/financeController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const router = Router();
router.post("/", authMiddleware, createTransaction);
router.get("/:userId", authMiddleware, getTransaction);
router.put("/:id", authMiddleware, updateTransaction);
router.delete("/:id", authMiddleware, deleteTransaction);
export default router;
//# sourceMappingURL=financeRoutes.js.map