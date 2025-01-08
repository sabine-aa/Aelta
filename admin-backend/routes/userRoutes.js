// import express from "express";
// import authMiddleware from "../middlewares/authMiddleware.js";

// const router = express.Router();

// router.get("/protected", authMiddleware, (req, res) => {
//   res.status(200).json({ message: "Access granted", user: req.user });
// });

// export default router;

import express from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;