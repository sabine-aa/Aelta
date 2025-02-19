import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TeamCard = ({ name, short_description, image, slug, title }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-t-lg mb-4"
      />
      <h2 className="text-2xl font-semibold text-[#5a38a7] mb-2">{name}</h2>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-700 mb-4">{short_description}</p>
      <Link
        to={`/teams/${slug}`}
        className="text-[#5a38a7] font-semibold hover:text-[#8569c8]"
      >
        Know More →
      </Link>
    </div>
  );
};

export default TeamCard;
