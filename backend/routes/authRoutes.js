import express from "express";
import mysql from "mysql2/promise";

const router = express.Router();

// ✅ Create database connection once and reuse it
let db;
(async () => {
  try {
    db = await mysql.createConnection({
      host: "localhost",
      user: "root", // your MySQL username
      password: "camposo2705", // your MySQL password
      database: "quizbee_db" // your database name
    });
    console.log("✅ Connected to MySQL Database");
  } catch (err) {
    console.error("❌ Database connection failed:", err.message);
  }
})();

// ✅ SIGNUP Route
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if email exists
    const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);
    if (rows.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Insert the new user and log the result
    const [result] = await db.execute(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, password]
    );

    console.log("Insert result:", result); // Should show insertId
    if (result.affectedRows === 1) {
      console.log("🟢 New user registered:", email);
      return res.status(201).json({ message: "User registered successfully" });
    } else {
      console.error("❌ Insert failed:", result);
      return res.status(500).json({ message: "Failed to register user" });
    }
  } catch (error) {
    console.error("❌ Signup error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ LOGIN Route
// ✅ LOGIN Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // The user might enter either an email or a username, so we use 'identifier'
    const identifier = email;

    const [rows] = await db.execute(
      "SELECT * FROM users WHERE (email = ? OR username = ?) AND password = ?",
      [identifier, identifier, password]
    );

    if (rows.length === 0) {
      console.log(`⚠️ Invalid login attempt: ${identifier}`);
      return res.status(401).json({ message: "Invalid credentials" });
    }

    console.log(`🟢 Login successful: ${identifier}`);
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("❌ Login error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
