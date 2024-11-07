import React from "react";
import { Link } from "react-router-dom";

const BlogsCard = ({ title, description, image, slug, date }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-gray-500 text-sm mb-2">{date}</p>
        <h2 className="text-xl text-[#5a38a7] font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <Link
          to={`/blogs/${slug}`}
          className="text-[#360182] hover:text-[#b3902f] font-semibold mt-3 inline-block"
        >
          Read More
          <span className="ml-1">→</span>
        </Link>
      </div>
    </div>
  );
};

export default BlogsCard;
