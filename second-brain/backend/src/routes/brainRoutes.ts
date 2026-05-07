import express from "express";
import { shareBrain, getSharedBrain } from "../controllers/brainController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/share", authMiddleware, shareBrain);
router.get("/:shareLink", getSharedBrain);

export default router;