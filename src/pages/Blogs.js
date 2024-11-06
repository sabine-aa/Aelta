import React from "react";
import BlogCard from "../components/BlogsCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import blogsCover from "../assets/coverBlog.jpg";
import image2 from "../assets/cover.jpg";
import image3 from "../assets/blogs3.jpg";
import image1 from "../assets/blogsCover.jpg";

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

const Blogs = () => {
  return (
    <div>
      <Navbar />
      <div>
        <img
          src={blogsCover}
          alt="Blog Cover"
          className="w-full h-80 object-cover "
        />
      </div>
      <div className="container mx-auto p-5">
        <h1 className="text-3xl font-bold mb-5">Our Latest Blogs</h1>
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
      <Footer />
    </div>
  );
};

export default Blogs;
