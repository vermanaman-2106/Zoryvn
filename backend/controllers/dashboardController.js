const Transaction = require("../models/Transaction");
const mongoose = require("mongoose");

// ==================== SUMMARY ====================
exports.getSummary = async (req, res) => {
  try {
    const userId = req.user.id;

    const result = await Transaction.aggregate([
      {
        $match: {
          createdBy: new mongoose.Types.ObjectId(userId)
        }
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

    result.forEach(item => {
      if (item._id === "income") income = item.total;
      if (item._id === "expense") expense = item.total;
    });

    res.json({
      totalIncome: income,
      totalExpense: expense,
      netBalance: income - expense
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// ==================== CATEGORY WISE ====================
exports.getCategoryWise = async (req, res) => {
  try {
    const userId = req.user.id;

    const data = await Transaction.aggregate([
      {
        $match: {
          createdBy: new mongoose.Types.ObjectId(userId)
        }
      },
      {
        $group: {
          _id: "$category",
          total: { $sum: "$amount" }
        }
      },
      {
        $sort: { total: -1 } // optional: highest spending first
      }
    ]);

    res.json(data);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// ==================== MONTHLY TRENDS ====================
exports.getMonthlyTrends = async (req, res) => {
  try {
    const userId = req.user.id;

    const data = await Transaction.aggregate([
      {
        $match: {
          createdBy: new mongoose.Types.ObjectId(userId)
        }
      },
      {
        $group: {
          _id: { $month: "$date" },
          total: { $sum: "$amount" }
        }
      },
      {
        $sort: { "_id": 1 } // month order Jan → Dec
      }
    ]);

    res.json(data);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};