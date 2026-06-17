import { Router } from "express";
import { getDashboardSummary, getExpenseByCategory } from "../controllers/dashboardController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const router = Router();
router.get("/summary", authMiddleware, getDashboardSummary);
router.get("/category", authMiddleware, getExpenseByCategory);
export default router;
//# sourceMappingURL=dashboardRoutes.js.map