const Record = require("../models/Record");

// CREATE
exports.createRecord = async (req, res) => {
  try {
    const record = await Record.create({
      ...req.body,
      user: req.user.id
    });

    res.status(201).json(record);

  } catch (error) {
    res.status(500).json({ 
        message: "Error creating record" 
    });
  }
};

// GET ALL (with filters)
exports.getRecords = async (req, res) => {
  try {
    const { type, category, startDate, endDate } = req.query;

    let filter = { user: req.user.id };

    if (type) filter.type = type;
    if (category) filter.category = category;

    if (startDate || endDate) {
      filter.date = {};
      if (startDate) filter.date.$gte = new Date(startDate);
      if (endDate) filter.date.$lte = new Date(endDate);
    }

    const records = await Record.find(filter).sort({ date: -1 });

    res.json(records);

  } catch (error) {
    res.status(500).json({ 
      message: "Error fetching records" 
    });
  }
};

// UPDATE
exports.updateRecord = async (req, res) => {
  try {
    const record = await Record.findOneAndUpdate({
         _id: req.params.id, 
        user: req.user.id 
    },
      req.body,
      { new: true }
    );

    if (!record) {
      return res.status(404).json({ 
        message: "Record not found" 
      });
    }

    res.json(record);

  } catch (error) {
    res.status(500).json({ 
        message: "Error updating record" 
    });
  }
};

// DELETE
exports.deleteRecord = async (req, res) => {
  try {
    const record = await Record.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id
    });

    if (!record) {
      return res.status(404).json({ 
        message: "Record not found" 
      });
    }

    res.json({ 
        message: "Record deleted" 
    });

  } catch (error) {
    res.status(500).json({ 
        message: "Error deleting record" 
    });
  }
};