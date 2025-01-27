import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
});

const Course = mongoose.model("Course", courseSchema);
export default Course;
