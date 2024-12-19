import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TeamDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const teamData = [
    {
      name: "Alice Johnson",
      title: "Software Engineer",
      fullDescription:
        "Alice has been in the tech industry for over 10 years, specializing in AI-driven applications and backend development.",
      videoUrl: "https://www.youtube.com/embed/mjA6uVB1-TA?si=Ui5VgoO7YLVRGRsJ",
      slug: "alice-johnson",
      certificates: [
        "Certified Kubernetes Administrator",
        "AWS Certified Solutions Architect",
        "Google Cloud Professional Data Engineer",
      ],
      experience: [
        "5 years at Tech Corp as Lead Software Engineer",
        "3 years at InnovateX as a Senior Backend Developer",
        "Developed AI-driven algorithms for healthcare systems",
      ],
      education: [
        "Bachelor's in Computer Science, MIT",
        "Master's in Artificial Intelligence, Stanford University",
      ],
    },
    {
      name: "Bob Smith",
      title: "UI/UX Designer",
      fullDescription:
        "Bob is an accomplished designer with a strong background in creating visually compelling and user-centric designs.",
      videoUrl: "https://www.youtube.com/embed/mjA6uVB1-TA?si=Ui5VgoO7YLVRGRsJ",
      slug: "bob-smith",
      certificates: [
        "Certified User Experience Designer (CXD)",
        "Adobe Certified Expert in Photoshop",
        "Interaction Design Specialization from Coursera",
      ],
      experience: [
        "4 years at Creative Solutions as Lead UX Designer",
        "2 years freelancing for Fortune 500 companies",
        "Redesigned mobile and web interfaces for accessibility",
      ],
      education: [
        "Bachelor's in Graphic Design, Rhode Island School of Design",
        "Certificate in Interaction Design, California Institute of the Arts",
      ],
    },
    {
      name: "Carl narc",
      title: "UI/UX Designer",
      fullDescription:
        "Bob is an accomplished designer with a strong background in creating visually compelling and user-centric designs.",
      videoUrl: "https://www.youtube.com/embed/mjA6uVB1-TA?si=Ui5VgoO7YLVRGRsJ",
      slug: "carl-narc",
      certificates: [
        "Certified User Experience Designer (CXD)",
        "Adobe Certified Expert in Photoshop",
        "Interaction Design Specialization from Coursera",
      ],
      experience: [
        "4 years at Creative Solutions as Lead UX Designer",
        "2 years freelancing for Fortune 500 companies",
        "Redesigned mobile and web interfaces for accessibility",
      ],
      education: [
        "Bachelor's in Graphic Design, Rhode Island School of Design",
        "Certificate in Interaction Design, California Institute of the Arts",
      ],
    },
  ];

  const member = teamData.find((member) => member.slug === slug);

  if (!member) {
    return <p className="text-center mt-10">Team member not found</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-5 py-10">
        <button
          onClick={() => navigate(-1)}
          className="text-[#360182] hover:text-[#b3902f] mb-4"
        >
          ← Back to Team
        </button>
        <h1 className="text-3xl font-bold mb-5">{member.name}</h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          {member.title}
        </h2>
        {/* Embed YouTube Video */}
        <iframe
          width="100%"
          height="500"
          src={member.videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="mb-5"
        ></iframe>
        <p className="text-gray-600 text-lg mb-6">{member.fullDescription}</p>

        <h3 className="text-2xl font-semibold text-[#360182] mb-3">
          Certificates
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          {member.certificates.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>

        <h3 className="text-2xl font-semibold text-[#360182] mb-3">
          Experience
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          {member.experience.map((exp, index) => (
            <li key={index}>{exp}</li>
          ))}
        </ul>

        <h3 className="text-2xl font-semibold text-[#360182] mb-3">
          Education
        </h3>
        <ul className="list-disc list-inside text-gray-700">
          {member.education.map((edu, index) => (
            <li key={index}>{edu}</li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default TeamDetail;
