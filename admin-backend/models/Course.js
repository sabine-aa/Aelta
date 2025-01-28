import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  largeDescription: { type: String, required: true }, // Added large description
  image: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  date: { type: Date, required: true, default: Date.now },
  instructor: { type: String, required: true }, // Added date with default value
});

const Course = mongoose.model("Course", courseSchema);
export default Course;
