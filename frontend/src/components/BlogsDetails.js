import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BlogsDetails = () => {
  const { slug } = useParams(); // Extract slug from the URL
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null); // State to store the blog details
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState(null); // State to handle errors

  // Fetch blog details from the backend
  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await fetch(
          `https://aelta.onrender.com/api/blogs/${slug}`
        ); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch blog details");
        }
        const data = await response.json();
        setBlog(data); // Update the blog state with fetched details
      } catch (err) {
        setError(err.message); // Handle errors
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchBlogDetails();
  }, [slug]); // Refetch if slug changes

  if (loading) {
    return <p className="text-center mt-10">Loading blog details...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">Error: {error}</p>;
  }

  if (!blog) {
    return <p className="text-center mt-10">Blog not found</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-5">
        <button
          onClick={() => navigate("/blogs")}
          className="flex items-center text-gray-600 mb-2 hover:text-gray-800"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Back to Blogs
        </button>
        <h1 className="text-3xl font-bold mb-3">{blog.title}</h1>
        <hr />
        <p className="text-gray-500 text-sm my-2">
          <FontAwesomeIcon icon={faClock} className="mr-2" />
          {new Date(blog.date).toLocaleDateString()}
        </p>
        <img
          src={blog.image || "/images/default-image.jpg"} // Use default image if none provided
          alt={blog.title}
          className="w-full h-auto rounded-lg mb-5"
        />
        <div
          className="text-lg text-gray-700"
          dangerouslySetInnerHTML={{ __html: blog.largeDescription }}
        />
      </div>
      <Footer />
    </div>
  );
};

export default BlogsDetails;
