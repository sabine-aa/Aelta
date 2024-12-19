// src/components/TeamCard.js
import React from "react";
import { Link } from "react-router-dom";

const TeamCard = ({ name, title, description, image, slug }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-lg"
      />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600">{title}</p>
      <p className="text-gray-500 text-sm mt-2">{description}</p>
      <Link
        to={`/team/${slug}`}
        className="mt-4 inline-block text-[#360182] hover:text-[#b3902f] font-semibold"
      >
        Learn More
        <span className="ml-1">→</span>
      </Link>
    </div>
  );
};

export default TeamCard;
