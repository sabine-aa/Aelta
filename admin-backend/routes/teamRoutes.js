import express from "express";
import {
  getAllTeams,
  getTeamBySlug,
  getTeamCount,
  createTeam,
  deleteTeam,
  updateTeam,
} from "../controllers/teamController"; // Import controller functions
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary Storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "teams", // Folder in Cloudinary
    allowed_formats: ["jpg", "png", "jpeg"], // Allow only specific formats
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
