import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const TeamDetails = () => {
  const { slug } = useParams(); // Extract slug from the URL
  const navigate = useNavigate();

  const [team, setTeam] = useState(null); // State to store the blog details
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState(null); // State to handle errors

  // Fetch blog details from the backend
  useEffect(() => {
    const fetchTeamDetails = async () => {
      try {
        const response = await fetch(
          `https://aelta.onrender.com/api/teams/${slug}`
        ); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch course details");
        }
        const data = await response.json();
        setTeam(data); // Update the course state with fetched details
      } catch (err) {
        setError(err.message); // Handle errors
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchTeamDetails();
  }, [slug]); // Refetch if slug changes

  if (loading) {
    return <p className="text-center mt-10">Loading team details...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">Error: {error}</p>;
  }

  if (!team) {
    return <p className="text-center mt-10">team not found</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-5">
        <button
          onClick={() => navigate("/teams")}
          className="flex items-center text-gray-600 mb-2 hover:text-gray-800"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Back to Teams
        </button>
        <h1 className="text-3xl font-bold mb-3">{team.name}</h1>
        <hr />
        <p className="text-gray-500 text-sm my-2">
          <FontAwesomeIcon icon={faClock} className="mr-2" />
          {new Date(team.date).toLocaleDateString()}
        </p>
        {team.videoUrl ? (
          <div className="my-4">
            <h2 className="text-xl font-semibold">Introduction Video</h2>
            <div className="mt-2">
              <iframe
                width="560"
                height="315"
                src={team.videoUrl} // Directly using formatted URL
                title="Team Video"
                frameBorder="0"
                allowFullScreen
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">No video available</p>
        )}

        <div className="text-lg text-gray-700">{team.description}</div>
        <div className="text-lg text-gray-700">
          <span className="font-bold">Certificates:</span> {team.certificates}
        </div>
        <div className="text-lg text-gray-700">
          <span className="font-bold">Experience:</span> {team.experience}
        </div>
        <div className="text-lg text-gray-700">
          <span className="font-bold">Education:</span> {team.education}
        </div>
        <div className="text-lg text-gray-700">
          <span className="font-bold">Email:</span> {team.email}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TeamDetails;
