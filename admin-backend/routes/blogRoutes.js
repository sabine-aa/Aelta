// export default router;
import multer from "multer";
import express from "express";
import {
  getAllBlogs,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogCount,
} from "../controllers/blogController.js";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary Storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "blogs", // Folder in Cloudinary
    allowed_formats: ["jpg", "png", "jpeg"], // Allow only specific formats
  },
});

const upload = multer({ storage });

const router = express.Router();

router.get("/", getAllBlogs);
router.get("/count", getBlogCount);
router.get("/:slug", getBlogBySlug);
router.post("/", upload.single("image"), createBlog);
router.put("/:slug", upload.single("image"), updateBlog);
router.delete("/:slug", deleteBlog);

export default router;
