import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import teamPhoto from "../assets/teamPhoto.png"; 
import missionImage from "../assets/mission.png";
import visionImage from "../assets/vision.png"; 
import TeamCard from "../components/TeamCard";
import imageAlice from "../assets/alice.jpg";
import imageBob from "../assets/bobSmith.jpg";
import imageCarl from "../assets/Carl.png";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Alice Johnson",
      title: "Software Engineer",
      description: "Passionate about AI and software development.",
      image: imageAlice,
      slug: "alice-johnson",
    },
    {
      name: "Bob Smith",
      title: "UI/UX Designer",
      description: "Creating beautiful and functional user experiences.",
      image: imageBob,
      slug: "bob-smith",
    },
    {
      name: "Carl",
      title: "English Professor",
      description: "Creating beautiful and functional user experiences.",
      image: imageCarl,
      slug: "carl-narc",
    },
  ];

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-80"
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
      <div className="container mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Mission Section */}
        <div className="flex flex-col items-center text-center ">
          <h2 className="text-2xl font-semibold text-[#b3902f] mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            Our mission is to inspire positive change through innovative
            solutions, striving to create a sustainable impact in our
            communities and industries. Every day, we work towards advancing
            technology with a purpose-driven approach.
          </p>
          <img
            src={missionImage}
            alt="Our Mission"
            className="rounded-lg shadow-lg w-4/5 md:w-full"
          />
        </div>

        {/* Vision Section */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-semibold text-[#b3902f] mb-4">
            Our Vision
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            To be leaders in the tech world who not only innovate but also
            uplift. We envision a future where technology empowers every
            individual to reach their potential, creating a more inclusive,
            sustainable world.creating a more inclusive, sustainable world.
          </p>
          <img
            src={visionImage}
            alt="Our Vision"
            className="rounded-lg shadow-lg w-4/5 md:w-full"
          />
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamCard
              key={member.slug}
              name={member.name}
              title={member.title}
              description={member.description}
              image={member.image}
              slug={member.slug}
            />
          ))}
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
