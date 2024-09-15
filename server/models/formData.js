import mongoose from "mongoose";

const formDataSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: [/.+@.+\..+/, "Please enter a valid email address"],
    },
    message: {
      type: String,
      trim: true,
      maxlength: 500,
    },
  },
  { timestamps: true }
);

const FormData = mongoose.model("FormData", formDataSchema);

export default FormData;
