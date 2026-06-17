import { Router } from "express"
import { createTransaction, getTransaction, updateTransaction, deleteTransaction } from "../controllers/transactionController.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"

const router = Router()

router.post("/", authMiddleware, createTransaction)
router.get("/", authMiddleware, getTransaction)
router.put("/:id", authMiddleware, updateTransaction)
router.delete("/:id", authMiddleware, deleteTransaction)

export default router