import Team from "../models/Team.js";
import mongodb from "mongodb";

// Get all team members
const getAllTeams = async (req, res) => {
  try {
    const teams = await Team.find();
    const teamsWithVideoUrls = teams.map((team) => ({
      ...team._doc,
      videoUrl: team.videoUrl
        ? team.videoUrl.replace("watch?v=", "embed/")
        : null,
      imageUrl: team.image ? `/api/teams/image/${team._id}` : null,
    }));
    res.status(200).json(teamsWithVideoUrls);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a team member by slug
const getTeamBySlug = async (req, res) => {
  try {
    const team = await Team.findOne({ slug: req.params.slug });
    if (!team)
      return res.status(404).json({ message: "Team member not found" });

    res.status(200).json({
      ...team._doc,
      videoUrl: team.videoUrl
        ? team.videoUrl.replace("watch?v=", "embed/")
        : null,
      imageUrl: team.image ? `/api/teams/image/${team._id}` : null,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new team member
const createTeam = async (req, res) => {
  console.log("Received team data:", req.body);

  const {
    name,
    title,
    short_description,
    description,
    image,
    slug,
    videoUrl,
    certificates,
    experience,
    education,
    email,
    linkedIn,
    date,
  } = req.body;

  try {
    const teamData = {
      name,
      title,
      short_description,
      description,
      image,
      slug,
      videoUrl,
      certificates,
      experience,
      education,
      email,
      linkedIn,
      date: date || new Date(),
    };
    // Check for uploaded file and include Cloudinary URL
    if (req.file) {
      teamData.image = req.file.path; // Cloudinary auto-generates URL
    }

    const team = new Team(teamData);
    await team.save();

    res.status(201).json({ message: "Team member created successfully", team });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a team member
const updateTeam = async (req, res) => {
  try {
    console.log("Request params (slug):", req.params.slug);
    console.log("Request body:", req.body);

    const updatedData = { ...req.body };
    if (req.file) {
      updatedData.image = req.file.path; // Cloudinary provides the file URL in `file.path`
    }
    const team = await Team.findOneAndUpdate(
      { slug: req.params.slug },
      updatedData,
      { new: true, runValidators: true }
    );

    if (!team) {
      return res.status(404).json({ message: "Team member not found" });
    }

    res.status(200).json(team); // Send updated team data
  } catch (err) {
    console.error("Backend error:", err.message);
    res.status(400).json({ message: err.message });
  }
};

// Delete a team member
const deleteTeam = async (req, res) => {
  try {
    const team = await Team.findOneAndDelete({ slug: req.params.slug });
    if (!team)
      return res.status(404).json({ message: "Team member not found" });
    res.status(200).json({ message: "Team member deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get team count
const getTeamCount = async (req, res) => {
  try {
    const count = await Team.countDocuments();
    res.status(200).json({ count });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export {
  getAllTeams,
  getTeamBySlug,
  createTeam,
  updateTeam,
  deleteTeam,
  getTeamCount,
};
