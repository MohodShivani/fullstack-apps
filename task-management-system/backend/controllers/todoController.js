const Todo = require("../models/Todo");

exports.createTodo = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title || title.trim() === "") {
      return res.status(400).json({
        message: "Title is required"
      });
    }

    await Todo.create({
      title,
      userId: req.userId
    });

    res.status(201).json({
      message: "Todo created successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
};

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({
      userId: req.userId
    });

    res.status(200).json({
      todos
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;

    const todo = await Todo.findOneAndUpdate(
      { _id: id, userId: req.userId }, // ownership check
      { title, completed },
      { new: true }
    );

    if (!todo) {
      return res.status(404).json({
        message: "Todo not found"
      });
    }

    res.status(200).json({
      message: "Todo updated",
      todo
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findOneAndDelete({
      _id: id,
      userId: req.userId
    });

    if (!todo) {
      return res.status(404).json({
        message: "Todo not found"
      });
    }

    res.status(200).json({
      message: "Todo deleted"
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
};

