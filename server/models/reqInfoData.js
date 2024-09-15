import mongoose from "mongoose";

const reqInfoDataSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true }, // Ensure this is a String type
  email: { type: String, required: true },
  country: { type: String, required: true },
  passengers: { type: Number, required: true },
  departureCity: { type: String, required: true },
  arrivalCity: { type: String, required: true },
  departureDate: { type: Date, required: true },
  returnDate: { type: Date, required: true },
  preferredAircraft: { type: String, required: true },
  flownBefore: { type: String, enum: ["Yes", "No"], required: true }, // Adjust to String with enum values
});

const ReqInfoData = mongoose.model("ReqInfoData", reqInfoDataSchema);

export default ReqInfoData;
