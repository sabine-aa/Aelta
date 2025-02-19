import Team from "../models/Team.js";

// Get all team members
const getAllTeams = async (req, res) => {
  try {
    const teams = await Team.find();
    const teamsWithVideoUrls = teams.map((team) => ({
      ...team._doc,
      videoUrl: team.videoUrl
        ? team.videoUrl.replace("watch?v=", "embed/")
        : null,
      imageUrl: team.image || null, // Directly use Cloudinary image URL
    }));
    res.status(200).json(teamsWithVideoUrls);
  } catch (err) {
    console.error("Error fetching teams:", err);
    res.status(500).json({ message: "Error fetching team members." });
  }
};

// Get a team member by slugg
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
      imageUrl: team.image || null,
    });
  } catch (err) {
    console.error("Error fetching team member:", err);
    res.status(500).json({ message: "Error fetching team member." });
  }
};

// Create a new team member
const createTeam = async (req, res) => {
  try {
    console.log("Received team data:", req.body);
    const teamData = { ...req.body, date: req.body.date || new Date() };

    // If an image is uploaded, store its URL from Cloudinary
    if (req.file) {
      teamData.image = req.file.path;
    }

    const team = new Team(teamData);
    await team.save();

    res.status(201).json({ message: "Team member created successfully", team });
  } catch (err) {
    console.error("Error creating team member:", err);
    res.status(400).json({ message: "Error creating team member." });
  }
};

// Update a team member
const updateTeam = async (req, res) => {
  try {
    console.log("Updating team member:", req.params.slug);
    const updatedData = { ...req.body };

    if (req.file) {
      updatedData.image = req.file.path;
    }

    const team = await Team.findOneAndUpdate(
      { slug: req.params.slug },
      updatedData,
      { new: true, runValidators: true }
    );

    if (!team)
      return res.status(404).json({ message: "Team member not found" });

    res.status(200).json(team);
  } catch (err) {
    console.error("Error updating team member:", err);
    res.status(400).json({ message: "Error updating team member." });
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
    console.error("Error deleting team member:", err);
    res.status(500).json({ message: "Error deleting team member." });
  }
};

// Get team count
const getTeamCount = async (req, res) => {
  try {
    const count = await Team.countDocuments();
    res.status(200).json({ count });
  } catch (err) {
    console.error("Error fetching team count:", err);
    res.status(500).json({ message: "Error fetching team count." });
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
