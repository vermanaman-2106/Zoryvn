const Transaction = require("../models/Transaction");

// CREATE
exports.createTransaction = async (req, res) => {
  try {
    const { amount, type, category, date, note } = req.body;

    const transaction = await Transaction.create({
      amount,
      type,
      category,
      date,
      note,
      createdBy: req.user.id
    });

    res.status(201).json(transaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ALL (with filters)
exports.getTransactions = async (req, res) => {
    try {
      const userId = req.user.id;
  
      const { page = 1, limit = 5, type, category } = req.query;
  
      let filter = { createdBy: userId };
  
      if (type) filter.type = type;
      if (category) filter.category = category;
  
      const transactions = await Transaction.find(filter)
        .skip((page - 1) * limit)
        .limit(Number(limit))
        .sort({ date: -1 });
  
      res.json(transactions);
  
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

// UPDATE
exports.updateTransaction = async (req, res) => {
  try {
    const updated = await Transaction.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE
exports.deleteTransaction = async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

