import express from "express";
import { createContent, getContent, deleteContent } from "../controllers/contentController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
const router = express.Router();
router.post("/", authMiddleware, createContent);
router.get("/", authMiddleware, getContent);
router.delete("/:id", authMiddleware, deleteContent);
export default router;
//# sourceMappingURL=contentRoutes.js.map