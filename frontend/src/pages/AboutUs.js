import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import teamPhoto from "../assets/aboutUs.jpg";
import missionImage from "../assets/missionn.jpg";
import visionImage from "../assets/vision.jpg";
import TeamCard from "../components/TeamCard";

const AboutUs = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/teams");
        if (!response.ok) {
          throw new Error("Failed to fetch teams");
        }
        const data = await response.json();
        setTeams(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  return (
    <div>
      <Navbar />

      <div
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: `url(${teamPhoto})` }}
      >
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-center px-4">
            About Us
          </h1>
        </div>
      </div>

      {/* Intro Section */}
      <div className="container mx-auto px-5 py-10 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-[#360182]">
          Who We Are
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          We are a passionate team dedicated to creating innovative solutions
          that make a difference. Our journey began with a shared vision to
          bring together creativity, technology, and community impact. Today, we
          are a diverse team united by our commitment to quality and excellence.
        </p>
      </div>

      {/* Mission and Vision Section */}
      <div className="container mx-auto px-5 pt-10 ">
        {/* Mission Section */}
        <div className="flex flex-col lg:flex-row items-center text-center md:text-left">
          <div className="flex-1 lg:ml-4">
            <h2 className="text-2xl font-semibold text-[#b3902f] mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg ">
              AELTA is committed to providing personalized tutorials and
              professional development services that enhance academic skills. We
              strive to bridge educational opportunities and ensure access to
              diverse resources, enabling students to succeed in their academic
              pursuits.
            </p>
          </div>
          <div className="flex-1">
            <img src={missionImage} alt="Our Mission" className=" w-full" />
          </div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center text-center  md:text-left">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-[#b3902f] mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 text-lg mb-4 ">
              AELTA envisions a dynamic educational landscape where every
              learner is empowered to achieve academic excellence and
              proficiency, fostering a culture of collaboration and lifelong
              learning.
            </p>
          </div>
          <div className="flex-1 lg:ml-4">
            <img src={visionImage} alt="Our Vision" className=" w-full" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-5 py-10 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-[#360182]">
          Meet Our Team
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8 text-lg">
          Our team is the heart of our success. With a blend of creativity,
          expertise, and passion, we work together to bring our vision to life.
        </p>
        <div className="container mx-auto p-5">
          <h1 className="text-3xl text-[#5a38a7] font-bold mb-5">
            Explore Our Team Members
          </h1>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">Error: {error}</p>
          ) : teams.length === 0 ? (
            <p>No teams available at the moment.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {teams.map((team) => (
                <TeamCard
                  key={team._id}
                  name={team.name}
                  short_description={
                    team.short_description || "No description available"
                  }
                  image={team.image || "/images/default-team.jpg"}
                  slug={team.slug}
                  title={team.title}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-5 py-10 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-[#b3902f]">
          What People Are Saying
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8 text-lg">
          Our clients and partners are at the core of what we do. Here’s what
          they have to say about working with us.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "This team exceeded our expectations at every step of the way!",
            "Working with them has been an inspiring journey.",
            "Their creativity and commitment are unmatched.",
          ].map((testimonial, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <p className="text-gray-600 mb-4 italic">"{testimonial}"</p>
              <h4 className="text-lg font-semibold">- Satisfied Client</h4>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
