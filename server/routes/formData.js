import express from "express";
import FormData from "../models/formData.js";

const router = express.Router();

// POST request handler for user data
router.post("/userRequest", async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;

    // Simple validation
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Create a new FormData instance
    const formData = new FormData({
      firstName,
      lastName,
      email,
      message,
    });

    // Save the form data to the database
    await formData.save();

    // Respond with a success message
    res.status(201).json({ message: "Data saved successfully" });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Server Error" });
  }
});

export default router;
