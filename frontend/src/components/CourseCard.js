import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ name, description, image, slug }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 text-center">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-t-lg mb-4"
      />
      <h2 className="text-2xl font-semibold text-[#5a38a7] mb-2">{name}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <Link
        to={`/courses/${slug}`}
        className="text-[#5a38a7] font-semibold hover:text-[#8569c8]"
      >
        Know More →
      </Link>
    </div>
  );
};

export default CourseCard;
