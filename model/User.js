const express = require("express");
const cors = require("cors");
require("dotenv").config(); // ✅ env use

const User = require('./model/User');

const app = express();

app.use(cors());
app.use(express.json()); // ✅ VERY IMPORTANT

// ✅ Add User (Signup-like simple)
app.post("/user/add", async (req, res) => {
  const { name, email, age } = req.body;

  if (!name || !email) {
    return res.status(400).send("Name and Email are required");
  }

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.send("User already exists");
    }

    const newUser = new User({ name, email, age });
    await newUser.save();

    res.send("User saved");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// ✅ Get User
app.get("/user/get", async (req, res) => {
  const { name, email, age } = req.query;

  try {
    const user = await User.findOne({ name, email, age });
    res.send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// ✅ Root route (important for Railway)
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// ✅ PORT FIX (VERY IMPORTANT)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});