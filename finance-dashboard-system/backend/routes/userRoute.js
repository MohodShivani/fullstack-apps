const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");
const validate = require("../middlewares/validateMiddleware");
const { getUsers , updateRole , updateStatus }= require("../controllers/userController")
const { roleSchema, statusSchema } = require("../validators/userValidator");


// Admin only routes
router.get(
    "/", 
    authMiddleware, 
    authorizeRoles("admin"), 
    getUsers
);

router.patch(
    "/:id/role", 
    authMiddleware, 
    authorizeRoles("admin"), 
    validate(roleSchema),  
    updateRole
);

router.patch(
    "/:id/status", 
    authMiddleware, 
    authorizeRoles("admin"), 
    validate(statusSchema), 
    updateStatus
);

module.exports = router;