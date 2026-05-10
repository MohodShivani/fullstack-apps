const mongoose = require("mongoose");
const Record = require("../models/Record");

exports.getSummary = async (req, res) => {
  try {
    const userId = req.user.id;

    const data = await Record.aggregate([
      {
        $match: { user: new mongoose.Types.ObjectId(userId) }
      },
      {
        $group: {
          _id: "$type",
          total: { $sum: "$amount" }
        }
      }
    ]);

    let income = 0;
    let expense = 0;

    data.forEach(item => {
      if (item._id === "income") income = item.total;
      if (item._id === "expense") expense = item.total;
    });

    res.json({
      totalIncome: income,
      totalExpense: expense,
      netBalance: income - expense
    });

  } catch (error) {
    res.status(500).json({ 
        message: error.message 
    });
  }
};

exports.getCategoryTotals = async (req, res) => {
  try {
    const userId = req.user.id;

    const data = await Record.aggregate([
      {
        $match: {
          user: new mongoose.Types.ObjectId(userId),
          type: "expense"
        }
      },
      {
        $group: {
          _id: "$category",
          total: { $sum: "$amount" }
        }
      },
      { $sort: { total: -1 } }
    ]);

    res.json(data);

  } catch (error) {
    res.status(500).json({ 
        message: error.message 
    });
  }
};

exports.getRecentActivity = async (req, res) => {
  try {
    const userId = req.user.id;

    const records = await Record.find({ 
        user:userId 
    })
      .sort({ date: -1 })
      .limit(5);

    res.json(records);

  } catch (error) {
    res.status(500).json({ 
        message: error.message 
    });
  }
};

exports.getMonthlyTrends = async (req, res) => {
  try {
    const userId = req.user.id;

    const data = await Record.aggregate([
      {
        $match: { 
            user: new mongoose.Types.ObjectId(userId) 
        }
      },
      {
        $group: {
          _id: {
            month: { $month: "$date" },
            type: "$type"
          },
          total: { $sum: "$amount" }
        }
      },
      {
        $group: {
          _id: "$_id.month",
          income: {
            $sum: {
              $cond: [{ $eq: ["$_id.type", "income"] }, "$total", 0]
            }
          },
          expense: {
            $sum: {
              $cond: [{ $eq: ["$_id.type", "expense"] }, "$total", 0]
            }
          }
        }
      },
      { $sort: { _id: 1 } }
    ]);

    res.json(data);

  } catch (error) {
    res.status(500).json({ 
        message: error.message 
    });
  }
};