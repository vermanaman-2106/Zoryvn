const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());
const dashboardRoutes = require("./routes/dashboardRoutes");

app.use("/api/dashboard", dashboardRoutes);

const transactionRoutes = require("./routes/transactionRoutes");

app.use("/api/transactions", transactionRoutes);

// import routes & middleware
const authRoutes = require("./routes/authRoutes");
const authMiddleware = require("./middleware/authMiddleware");

// public routes
app.use("/api/auth", authRoutes);

// base route (important for testing)
app.get("/", (req, res) => {
  res.send("API Running...");
});

// protected route
app.get("/api/test", authMiddleware, (req, res) => {
  res.json({
    message: "Protected route working",
    user: req.user
  });
});

module.exports = app;