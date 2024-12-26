import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import blogRoutes from "./routes/blogRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Add to .env
  api_key: process.env.CLOUDINARY_API_KEY, // Add to .env
  api_secret: process.env.CLOUDINARY_API_SECRET, // Add to .env
});

// Resolve __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config(); // Load environment variables

const app = express();
connectDB(); // Connect to MongoDB

// CORS configuration
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));

// Middlewares
app.use(express.json()); // Parse JSON data
app.use(express.urlencoded({ extended: true })); // Parse form data

// Routes
app.use("/api/blogs", blogRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
