import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import teamPhoto from "../assets/aboutUs.jpg";
import missionImage from "../assets/missionn.jpg";
import visionImage from "../assets/vision.jpg";
import { Link } from "react-router-dom";
const AboutUs = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const [isMissionFlipped, setIsMissionFlipped] = useState(false);
  const [isVisionFlipped, setIsVisionFlipped] = useState(false);

  useEffect(() => {
    const observerOptions = { threshold: 0.5 };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === missionRef.current) {
          if (entry.isIntersecting) {
            setIsMissionFlipped((prev) => !prev); // Flip each time
          }
        }
        if (entry.target === visionRef.current) {
          if (entry.isIntersecting) {
            setIsVisionFlipped((prev) => !prev); // Flip each time
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (missionRef.current) observer.observe(missionRef.current);
    if (visionRef.current) observer.observe(visionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch("https://aelta.onrender.com/api/teams");
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

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-[#b3902f] mb-10">
          Our Mission & Vision
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          {/* Mission Card */}
          <div ref={missionRef} className="flex justify-center">
            <div className={`flip-card ${isMissionFlipped ? "flipped" : ""}`}>
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front">
                  <h3 className="text-2xl font-semibold text-[#b3902f]">
                    Our Mission
                  </h3>
                  <p className="text-white mt-4 text-center">
                    AELTA is committed to providing personalized tutorials and
                    professional development services that enhance academic
                    skills.
                  </p>
                </div>
                {/* Back Side */}
                <div className="flip-card-back">
                  <h3 className="text-2xl text-[#360182] font-semibold">
                    Empowering Education
                  </h3>
                  <p className="mt-4 text-center">
                    We bridge educational opportunities and ensure access to
                    diverse resources for academic success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div ref={visionRef} className="flex justify-center">
            <div className={`flip-card ${isVisionFlipped ? "flipped" : ""}`}>
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front">
                  <h3 className="text-2xl font-semibold text-[#b3902f]">
                    Our Vision
                  </h3>
                  <p className="text-white mt-4 text-center">
                    AELTA envisions a dynamic educational landscape where every
                    learner is empowered to achieve academic excellence.
                  </p>
                </div>
                {/* Back Side */}
                <div className="flip-card-back">
                  <h3 className="text-2xl text-[#360182] font-semibold">
                    Shaping the Future
                  </h3>
                  <p className="mt-4 text-center">
                    Fostering a culture of collaboration and lifelong learning
                    through innovation and excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto px-6 py-14 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Meet Our Team
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
          Our team is the heart of our success. With a blend of creativity,
          expertise, and passion, we work together to bring our vision to life.
        </p>

        <h1 className="text-3xl font-bold text-indigo-700 mb-6">
          Explore Our Team Members
        </h1>

        {/* Conditional Rendering */}
        {loading ? (
          <p className="text-lg font-semibold text-gray-600 animate-pulse">
            Loading...
          </p>
        ) : error ? (
          <p className="text-red-500 font-semibold">Error: {error}</p>
        ) : teams.length === 0 ? (
          <p className="text-gray-500 font-medium">
            No teams available at the moment.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teams.map((team) => (
              <div
                key={team._id}
                className="group  rounded-xl overflow-hidden transition-all transform hover:scale-105  p-6 text-center"
              >
                <img
                  src={team.image || "/images/default-team.jpg"}
                  alt={team.name}
                  className="w-56 h-56 mx-auto rounded-full object-cover group-hover:opacity-90 transition-opacity"
                />
                <h3 className="text-xl font-semibold text-gray-900 mt-4">
                  {team.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{team.title}</p>
                <p className="text-gray-700 text-sm mb-4">
                  {team.short_description || "No description available"}
                </p>
                <Link
                  to={`/teams/${team.slug}`}
                  className="text-[#5a38a7] font-semibold hover:text-[#8569c8]"
                >
                  Know More →
                </Link>
              </div>
            ))}
          </div>
        )}
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
