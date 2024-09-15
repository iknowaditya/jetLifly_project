import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Get MongoDB URI from .env
const MONGODB_URI = process.env.MONGODB_URI;

// Define the connectToMongoDB function
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

// Export the function
export { connectToMongoDB };
