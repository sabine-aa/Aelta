import express from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import {
  authMiddleware,
  authorizeAdmin,
} from "../middlewares/authMiddleware.js";

const router = express.Router();

// Protect manage users route - only admins can access
router.get("/", authMiddleware, authorizeAdmin, getAllUsers);
router.get("/:id", authMiddleware, getUserById);
router.post("/create", authMiddleware, authorizeAdmin, createUser);
router.put("/:id", authMiddleware, updateUser);
router.delete("/:id", authMiddleware, authorizeAdmin, deleteUser);

export default router;
