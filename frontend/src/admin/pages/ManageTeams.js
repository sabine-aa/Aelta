import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";
import AdminFooter from "../components/AdminFooter";
import DataTable from "../components/DataTable";

const ManageTeams = () => {
  const columns = [
    "Name",
    "Title",
    "Short Description",
    "Description",
    "Image",
    "Slug",
    "Video",
    "Certificates",
    "Experience",
    "Education",
    "Email",
    "Created At",
    "Actions",
  ];

  const [teams, setTeams] = useState([]);
  const [newTeam, setNewTeam] = useState({
    name: "",
    title: "",
    short_description: "",
    description: "",
    image: "",
    slug: "",
    videoUrl: "",
    certificates: "",
    experience: "",
    education: "",
    email: "",
    date: "",
  });
  const [selectedTeam, setSelectedTeam] = useState(null);

  // Fetch all teams
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/teams");
        setTeams(response.data);
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };
    fetchTeams();
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTeam({ ...newTeam, [name]: value });
  };

  // Create new team
  const handleCreateTeam = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", newTeam.name);
    formData.append("title", newTeam.title);
    formData.append("short_description", newTeam.short_description);
    formData.append("description", newTeam.description);
    formData.append("slug", newTeam.slug);
    formData.append("videoUrl", newTeam.videoUrl);
    formData.append("certificates", newTeam.certificates);
    formData.append("experience", newTeam.experience);
    formData.append("education", newTeam.education);
    formData.append("email", newTeam.email);
    if (newTeam.image) {
      formData.append("image", newTeam.image);
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/teams",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setTeams([...teams, response.data.team]);
    } catch (error) {
      console.error("Error creating team:", error.response.data.message);
    }
  };

  // Delete team
  const handleDeleteTeam = async (slug) => {
    try {
      await axios.delete(`http://localhost:5000/api/teams/${slug}`);
      setTeams(teams.filter((team) => team.slug !== slug));
    } catch (error) {
      console.error("Error deleting team:", error);
    }
  };

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-x-hidden">
        <AdminNavbar />
        <div className="p-6 space-y-6">
          <h1 className="text-2xl font-bold">Manage Teams</h1>

          <form
            onSubmit={handleCreateTeam}
            className="space-y-4 p-4 bg-white border rounded-lg shadow-md"
          >
            <input
              type="text"
              name="name"
              value={newTeam.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="p-2 border rounded-md"
            />
            <input
              type="text"
              name="title"
              value={newTeam.title}
              onChange={handleInputChange}
              placeholder="Title"
              className="p-2 border rounded-md"
            />
            <input
              type="text"
              name="slug"
              value={newTeam.slug}
              onChange={handleInputChange}
              placeholder="Slug"
              className="p-2 border rounded-md"
            />
            <textarea
              name="short_description"
              value={newTeam.short_description}
              onChange={handleInputChange}
              placeholder="Short Description"
              className="p-2 border rounded-md md:col-span-2"
            />
            <textarea
              name="description"
              value={newTeam.description}
              onChange={handleInputChange}
              placeholder="Description"
              className="p-2 border rounded-md md:col-span-2"
            />
            <textarea
              name="certificates"
              value={newTeam.certificates}
              onChange={handleInputChange}
              placeholder="Certificates"
              className="p-2 border rounded-md md:col-span-2"
            />
            <textarea
              name="experience"
              value={newTeam.experience}
              onChange={handleInputChange}
              placeholder="Experience"
              className="p-2 border rounded-md md:col-span-2"
            />
            <textarea
              name="education"
              value={newTeam.education}
              onChange={handleInputChange}
              placeholder="Education"
              className="p-2 border rounded-md md:col-span-2"
            />
            <textarea
              name="email"
              value={newTeam.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="p-2 border rounded-md md:col-span-2"
            />
            <input
              type="text"
              name="videoUrl"
              value={newTeam.videoUrl}
              onChange={handleInputChange}
              placeholder="Video URL"
              className="p-2 border rounded-md"
            />
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={(e) =>
                setNewTeam({ ...newTeam, image: e.target.files[0] })
              }
            />
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Create Team Member
            </button>
          </form>

          <div className="overflow-x-auto">
            <DataTable
              columns={columns}
              data={teams.map((team) => ({
                Name: team.name,
                Title: team.title,
                Description: team.description,
                Certificates: team.certificates,
                Experience: team.experience,
                Education: team.education,
                Email: team.email,
                Image: (
                  <img
                    src={team.image}
                    alt={team.name}
                    className="h-20 w-20 object-cover"
                  />
                ),
                Slug: team.slug,
                ShortDescription: team.short_description,
                Video: team.videoUrl ? (
                  <iframe
                    src={team.videoUrl}
                    title={team.name}
                    className="h-20 w-20"
                  />
                ) : (
                  "N/A"
                ),
                Actions: (
                  <button
                    onClick={() => handleDeleteTeam(team.slug)}
                    className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                ),
              }))}
            />
          </div>
        </div>
        <AdminFooter />
      </div>
    </div>
  );
};

export default ManageTeams;
