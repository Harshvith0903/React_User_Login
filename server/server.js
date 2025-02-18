const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const pool = require("./database");

const app = express();
const PORT = 4000;
const SECRET = "your_jwt_secret"; // Replace with an environment variable in production

app.use(express.json());
app.use(cors());

// Signup Route
app.post("/signup", async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await pool.query(
            "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING user_id",
            [username, hashedPassword]
        );
        res.status(201).json({ message: "User created successfully!" });
    } catch (error) {
        console.error("Signup Error:", error);
        res.status(400).json({ message: "Username already exists." });
    }
});

// Login Route
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const userResult = await pool.query(
            "SELECT * FROM users WHERE username = $1",
            [username]
        );
        if (userResult.rows.length === 0) {
            return res.status(400).json({ message: "Invalid username or password." });
        }
        const user = userResult.rows[0];
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(400).json({ message: "Invalid username or password." });
        }
        const token = jwt.sign({ user_id: user.user_id }, SECRET, { expiresIn: "1h" });
        res.json({ token, message: "Login successful!" });
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ message: "An error occurred during login." });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
