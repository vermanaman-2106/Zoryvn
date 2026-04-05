const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const {
  createTransaction,
  getTransactions,
  updateTransaction,
  deleteTransaction
} = require("../controllers/transactionController");

// all routes protected
router.use(authMiddleware);

router.post("/", createTransaction);
router.get("/", getTransactions);
router.patch("/:id", updateTransaction);
router.delete("/:id", deleteTransaction);

const roleMiddleware = require("../middleware/roleMiddleware");

router.post("/", roleMiddleware("admin"), createTransaction);
router.patch("/:id", roleMiddleware("admin"), updateTransaction);
router.delete("/:id", roleMiddleware("admin"), deleteTransaction);

// all roles can view
router.get("/", roleMiddleware("admin", "analyst", "viewer"), getTransactions);

module.exports = router;

