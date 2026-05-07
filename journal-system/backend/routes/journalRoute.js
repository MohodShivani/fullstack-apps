const express = require("express");
const router = express.Router();
const { createJournal, getJournal , analyzeJournal , getInsights , deleteJournal , updateJournal } = require("../controllers/journalController");
const { authMiddleware }  = require("../middlewares/authMiddleware");

router.post("/",authMiddleware, createJournal);
router.get("/",authMiddleware, getJournal);
router.post("/analyze",authMiddleware, analyzeJournal);
router.get("/insights",authMiddleware, getInsights);
router.delete("/:id", authMiddleware, deleteJournal)
router.put("/:id",authMiddleware, updateJournal)

module.exports = router;

