import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";
import SponsorSlider from "../components/SponsorSlider";
import teacher from "../assets/einstine1.jpg";
import BlogCard from "../components/BlogsCard";
import { useState, useEffect } from "react";
import "animate.css";

const Home = () => {
  const [blogs, setBlogs] = useState([]); // State to hold blogs data
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  // Fetch blogs from the backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/blogs"); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogs(data.reverse().slice(0, 3)); // Reverse the order of blogs to show newest first
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
      <ImageSlider />
      <SponsorSlider />
      <div className="flex flex-col items-center">
        <div className="container mx-auto p-4 lg:px-10 lg:pb-10 lg:pt-10 xl:px-20 xl:pb-20  xl:pt-10  ">
          <div className="flex flex-col md:flex-row lg:space-x-10 xl:space-x-20">
            <div
              className="flex-1 flex flex-col justify-between p-4 lg:p-10 xl:p-20 animate__animated animate__fadeInUp"
              style={{ animationDelay: "0.9s" }}
            >
              <div>
                <h1 className="text-2xl text-[#5a38a7] font-bold mb-4">
                  Welcome to Our Website!
                </h1>
                <p className="text-xl text-gray-700 mb-4">
                  We provide innovative solutions to help you achieve your
                  goals. Our team is dedicated to delivering quality services
                  that meet your needs and exceed your expectations. Join us on
                  this journey to success!
                </p>
                <p className="text-xl text-gray-700 mb-4">
                  We provide innovative solutions to help you achieve your
                  goals. Our team is dedicated to delivering quality services
                  that meet your needs and exceed your expectations.
                </p>
              </div>
              <a
                href="/courses"
                className="bg-[#360182] text-white py-2 px-7 rounded transition duration-300 hover:text-[#b3902f] self-start"
              >
                Explore Courses
              </a>
            </div>

            <div
              className="flex-1 p-4 lg:p-10 animate__animated animate__fadeInUp"
              style={{ animationDelay: "0.9s" }}
            >
              <img
                src={teacher}
                alt="A descriptive alt text"
                className="w-[400px] h-[400px] rounded-lg object-cover"
              />
            </div>
          </div>

          <h1 className="text-3xl text-[#5a38a7] text-center font-bold my-10">
            Our Latest Blogs
          </h1>
          <div className="container mx-auto p-5">
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
