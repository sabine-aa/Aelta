import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/protected", authMiddleware, (req, res) => {
  res.status(200).json({ message: "Access granted", user: req.user });
});

export default router;
