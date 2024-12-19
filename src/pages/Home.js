import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";
import SponsorSlider from "../components/SponsorSlider";
import teacher from "../assets/teacher.png";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import BlogCard from "../components/BlogsCard";

const Home = () => {
  const blogs = [
    {
      id: 1,
      title: "Robotics",
      description: "A deep dive into React's component lifecycle.",
      image: image1,
      slug: "robotics",
      date: "October 20, 2024",
    },
    {
      id: 2,
      title: "Programming",
      description: "How Tailwind can streamline your styling process.",
      image: image2,
      slug: "programming",
      date: "October 15, 2024",
    },
    {
      id: 3,
      title: "Art Program",
      description: "Introduction to DevOps and best practices.",
      image: image3,
      slug: "art-program",
      date: "October 10, 2024",
    },
  ];
  return (
    <div>
      <Navbar />
      <ImageSlider />
      <SponsorSlider />
      <div className="flex flex-col items-center">
        <div className="container mx-auto p-4 lg:px-10 lg:pb-10 lg:pt-10 xl:px-20 xl:pb-20  xl:pt-10  ">
          <div className="flex flex-col md:flex-row lg:space-x-10 xl:space-x-20">
            <div className="flex-1 flex flex-col justify-between p-4 lg:p-10 xl:p-20">
              {" "}
              <div>
                <h2 className="text-2xl text-[#5a38a7] font-bold mb-4">
                  Welcome to Our Website!
                </h2>
                <p className="text-sm text-gray-700 mb-4">
                  We provide innovative solutions to help you achieve your
                  goals. Our team is dedicated to delivering quality services
                  that meet your needs and exceed your expectations. Join us on
                  this journey to success!
                </p>
                <p className="text-sm text-gray-700 mb-4">
                  We provide innovative solutions to help you achieve your
                  goals. Our team is dedicated to delivering quality services
                  that meet your needs and exceed your expectations.
                </p>
              </div>
              <a
                href="/courses"
                className="bg-[#360182] text-white py-2 px-7  rounded transition duration-300 hover:text-[#b3902f] self-start" // Adjusted margin for spacing
              >
                Explore Courses
              </a>
            </div>

            <div className="flex-1 p-4 lg:p-10">
              <img
                src={teacher}
                alt="A descriptive alt text"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
          <h1 className="text-3xl text-[#5a38a7] text-center font-bold my-10">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                title={blog.title}
                description={blog.description}
                image={blog.image}
                slug={blog.slug}
                date={blog.date}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
