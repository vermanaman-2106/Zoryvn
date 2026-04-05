const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "User exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Login
exports.login = async (req, res) => {
    try {
      console.log("LOGIN HIT", req.body);
  
      const { email, password } = req.body;
  
      const user = await User.findOne({ email });
      console.log("USER:", user);
  
      if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      console.log("MATCH:", isMatch);
  
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      console.log("JWT SECRET:", process.env.JWT_SECRET);
  
      const token = jwt.sign(
        { id: user._id }, // 👈 simplified
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );
  
      res.json({ token });
  
    } catch (err) {
      console.log("LOGIN ERROR:", err); // 🔥 THIS WILL SHOW REAL ISSUE
      res.status(500).json({ message: err.message });
    }
  };