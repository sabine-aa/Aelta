import User from "../models/User.js"; // Import your User model
import bcrypt from "bcrypt"; // For password hashing

// GET all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); // Find all users
    res.status(200).json(users); // Return the users
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// GET a user by ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id); // Find user by ID
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user); // Return the user
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// POST (Create) a new user
export const createUser = async (req, res) => {
  const { firstName, lastName, email, password, role } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user
    const newUser = new User({ firstName, lastName, email, password, role });
    console.log("Original password:", password); // Log the original password
    newUser.password = await bcrypt.hash(password, 10); // Hash password
    console.log("Hashed password:", newUser.password); // Log the hashed password
    // Hash password before saving

    await newUser.save(); // Save user to database
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// PUT (Update) an existing user
export const updateUser = async (req, res) => {
  const { firstName, lastName, email, password, role } = req.body;
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user details
    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.email = email || user.email;
    user.role = role || user.role;

    // If the password is being updated, hash the new password
    if (password) {
      user.password = await bcrypt.hash(password, 10);
    }

    await user.save(); // Save updated user to database
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// DELETE a user by ID
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id); // Find user by ID
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.remove(); // Remove the user from the database
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};