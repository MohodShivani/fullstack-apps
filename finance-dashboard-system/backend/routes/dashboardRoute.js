const express = require("express");
const router = express.Router();

const {
  getSummary,
  getCategoryTotals,
  getRecentActivity,
  getMonthlyTrends
} = require("../controllers/dashboardController");

const authMiddleware = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");

router.get(
  "/summary",
  authMiddleware,
  authorizeRoles("viewer" ,"analyst", "admin"),
  getSummary
);

router.get(
  "/category",
  authMiddleware,
  authorizeRoles("viewer" , "analyst", "admin"),
  getCategoryTotals
);

router.get(
  "/trends",
  authMiddleware,
  authorizeRoles("viewer" , "analyst", "admin"),
  getMonthlyTrends
);

router.get(
  "/recent",
  authMiddleware,
  authorizeRoles("viewer", "analyst", "admin"),
  getRecentActivity
);

module.exports = router;