const express = require("express");
const router = express.Router();
const roleMiddleware = require("../middleware/roleMiddleware");
const authMiddleware = require("../middleware/authMiddleware");
const {
  getSummary,
  getCategoryWise,
  getMonthlyTrends
} = require("../controllers/dashboardController");

router.use(authMiddleware);

router.get("/summary", getSummary);
router.get("/category", getCategoryWise);
router.get("/monthly", getMonthlyTrends);
router.get("/summary", roleMiddleware("admin", "analyst"), getSummary);
router.get("/category", roleMiddleware("admin", "analyst"), getCategoryWise);
router.get("/monthly", roleMiddleware("admin", "analyst"), getMonthlyTrends);

module.exports = router;