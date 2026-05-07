const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const {createTodo,getTodos,updateTodo,deleteTodo} = require("../controllers/todoController");

// Create Todo
router.post("/", auth, createTodo);

// Get Todos
router.get("/", auth, getTodos);

// Update Todo
router.put("/:id", auth, updateTodo);

// Delete Todo
router.delete("/:id", auth, deleteTodo);

module.exports = router;


