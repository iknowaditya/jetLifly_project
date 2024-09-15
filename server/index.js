import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import formDataRouter from "./routes/formData.js";
import ReqInfoData from "./routes/reqInfoData.js";
import { connectToMongoDB } from "./config/db.js";

dotenv.config();

const app = express();

// Connect to MongoDB
connectToMongoDB();

// CORS setup: Allow requests from frontend origin
const corsOptions = {
  // origin: "http://localhost:3001", // Frontend URL
  origin: "https://jet-lifly-project-frontend.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(bodyParser.json());
app.use(cors(corsOptions));

app.use("/api", formDataRouter);
app.use("/api", ReqInfoData);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
