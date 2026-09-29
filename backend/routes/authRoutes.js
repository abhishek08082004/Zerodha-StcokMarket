const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserModel = require("../model/UserModel");

const router = express.Router();

// =========================
// SIGNUP
// =========================

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check fields
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Check existing user
    const existingUser = await UserModel.findOne({
      email: normalizedEmail,
    });

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists. Please login.",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = new UserModel({
      name: name.trim(),
      email: normalizedEmail,
      password: hashedPassword,
    });

    await newUser.save();

    return res.status(201).json({
      message: "Signup successful",
    });
  } catch (error) {
    console.error("SIGNUP ERROR:", error);

    return res.status(500).json({
      message: "Signup failed",
    });
  }
});

// =========================
// LOGIN
// =========================

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check fields
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Find user
    const user = await UserModel.findOne({
      email: normalizedEmail,
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // Compare password
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // Create JWT token
    const token = jwt.sign(
      {
        userId: user._id.toString(),
        email: user.email,
        name: user.name,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    console.log("LOGIN SUCCESS:", user.email);

    // IMPORTANT:
    // Token frontend ko return kar rahe hain.
    // Cookie use nahi kar rahe.
    return res.status(200).json({
      message: "Login successful",
      token: token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("LOGIN ERROR:", error);

    return res.status(500).json({
      message: "Login failed",
    });
  }
});

// =========================
// VERIFY TOKEN
// =========================

router.get("/verify", (req, res) => {
  try {
    let token = null;

    // Check Authorization header
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      token = req.headers.authorization.substring(7);
    }

    if (!token) {
      return res.status(401).json({
        authenticated: false,
        message: "No token found",
      });
    }

    // Verify JWT
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    return res.status(200).json({
      authenticated: true,
      user: decoded,
    });
  } catch (error) {
    console.error("VERIFY ERROR:", error.message);

    return res.status(401).json({
      authenticated: false,
      message: "Invalid or expired token",
    });
  }
});

// =========================
// LOGOUT
// =========================

router.post("/logout", (req, res) => {
  // Authentication is stored in localStorage
  // so logout only needs to confirm success.
  return res.status(200).json({
    message: "Logout successful",
  });
});

module.exports = router;