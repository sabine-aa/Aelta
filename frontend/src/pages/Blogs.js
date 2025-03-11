import React, { useState, useEffect } from "react";
import BlogCard from "../components/BlogsCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import blogsCover from "../assets/blogCover.jpg";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]); // State to hold blogs data
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  // Fetch blogs from the backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://aelta.onrender.com/api/blogs");
        // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogs(data.reverse()); // Reverse the order of blogs to show newest first
      } catch (err) {
        setError(err.message); // Handle errors
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchBlogs();
  }, []); // Run on component mount

  return (
    <div>
      <Navbar />
      <div
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: `url(${blogsCover})` }}
      >
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-center pl-5 sm:pl-24 md:pl-48 lg:pl-80 px-4">
            Our Blogs
          </h1>
        </div>
      </div>
      <div className="container mx-auto p-5">
        <h1 className="text-3xl text-[#5a38a7] font-bold mb-5">
          Our Latest Blogs
        </h1>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : blogs.length === 0 ? (
          <p>No blogs available at the moment.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogs.map((blog) => (
              <BlogCard
                key={blog._id}
                title={blog.title}
                description={blog.description}
                image={blog.image || "/images/default-image.jpg"}
                slug={blog.slug}
                date={blog.date}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
