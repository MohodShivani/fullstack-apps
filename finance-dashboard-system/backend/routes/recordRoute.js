const express = require("express");
const router = express.Router();

const { createRecord, getRecords, updateRecord, deleteRecord } = require("../controllers/recordController");

const authMiddleware = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");

router.post(
  "/",
  authMiddleware,
  authorizeRoles("admin"),
  createRecord
);

router.get(
  "/",
  authMiddleware,
  authorizeRoles("viewer", "analyst", "admin"),
  getRecords
);

router.patch(
  "/:id",
  authMiddleware,
  authorizeRoles("admin"),
  updateRecord
);

router.delete(
  "/:id",
  authMiddleware,
  authorizeRoles("admin"),
  deleteRecord
);

module.exports = router;