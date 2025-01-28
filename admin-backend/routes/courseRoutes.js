import express from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";
import {
  getAllCourses,
  getCourseBySlug,
  createCourse,
  updateCourse,
  deleteCourse,
  getCourseCount,
} from "../controllers/courseController.js";

// Cloudinary storage setup
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "courses",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage });
const router = express.Router();

router.get("/", getAllCourses);
router.get("/:slug", getCourseBySlug);
router.get("/count", getCourseCount);
router.post("/", upload.single("image"), createCourse);
router.put("/:slug", upload.single("image"), updateCourse);
router.delete("/:slug", deleteCourse);

export default router;
