import express from "express";
import {
  getAllTeams,
  getTeamBySlug,
  getTeamCount,
  createTeam,
  deleteTeam,
  updateTeam,
} from "../controllers/teamController.js";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";

// Cloudinary Storage Configuration
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "teams",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage });

const router = express.Router();

router.get("/", getAllTeams);
router.get("/count", getTeamCount);
router.get("/:slug", getTeamBySlug);
router.post("/", upload.single("image"), createTeam);
router.put("/:slug", upload.single("image"), updateTeam);
router.delete("/:slug", deleteTeam);

export default router;
