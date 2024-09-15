import express from "express";
import ReqInfoData from "../models/reqInfoData.js";
import { body, validationResult } from "express-validator";

const router = express.Router();

// Middleware for input validation
const validateReqData = [
  body("firstName").isString().notEmpty().withMessage("First name is required"),
  body("lastName").isString().notEmpty().withMessage("Last name is required"),
  body("phone").isString().notEmpty().withMessage("Phone number is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("country").isString().notEmpty().withMessage("Country is required"),
  body("passengers")
    .isInt({ min: 1 })
    .withMessage("Number of passengers must be a positive integer"),
  body("departureCity")
    .isString()
    .notEmpty()
    .withMessage("Departure city is required"),
  body("arrivalCity")
    .isString()
    .notEmpty()
    .withMessage("Arrival city is required"),
  body("departureDate")
    .isISO8601()
    .withMessage("Valid departure date is required"),
  body("returnDate").isISO8601().withMessage("Valid return date is required"),
  body("preferredAircraft")
    .isString()
    .notEmpty()
    .withMessage("Preferred aircraft is required"),
  body("flownBefore")
    .isString()
    .isIn(["Yes", "No"])
    .withMessage('Flown before must be "Yes" or "No"'),
];

router.post("/reqData", validateReqData, async (req, res) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const {
      firstName,
      lastName,
      phone,
      email,
      country,
      passengers,
      departureCity,
      arrivalCity,
      departureDate,
      returnDate,
      preferredAircraft,
      flownBefore,
    } = req.body;

    const reqInfoData = new ReqInfoData({
      firstName,
      lastName,
      phone,
      email,
      country,
      passengers,
      departureCity,
      arrivalCity,
      departureDate,
      returnDate,
      preferredAircraft,
      flownBefore,
    });

    // Save data to MongoDB
    await reqInfoData.save();
    res.status(201).send("New data saved successfully");
  } catch (error) {
    // Enhanced error logging
    console.error("Server error:", error.message, error.stack);
    res.status(500).send("Server Error: Could not save new data");
  }
});

export default router;
