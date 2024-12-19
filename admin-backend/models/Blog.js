// models/Blog.js

import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  // image: {
  //   filename: String,
  //   data: Buffer, // Binary data for the image
  //   contentType: String, // MIME type of the image (e.g., image/jpeg)
  // },
  content: { type: String, required: true },
  largeDescription: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now },
  slug: { type: String, required: true, unique: true },
  author: { type: String, required: true }, // Add author as a required field
});

// Create the model from the schema
const Blog = mongoose.model("Blog", blogSchema);

// Export the model as the default export
export default Blog; // Use default export here
