import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    bio: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Team", teamSchema);
