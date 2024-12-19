import React from "react";
import CourseCard from "../components/CourseCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SAT from "../assets/sat.png";
import TOEFL from "../assets/toefl.png";
import IELTS from "../assets/ielts.png";
import GRE from "../assets/gre.png";

const courses = [
  {
    name: "SAT ",
    description:
      "Comprehensive SAT preparation to enhance your skills in math, reading, and writing.",
    image: SAT,
    slug: "sat",
  },
  {
    name: "TOEFL ",
    description:
      "Prepare for the TOEFL exam with in-depth language practice and strategies for each section.",
    image: TOEFL,
    slug: "toefl",
  },
  {
    name: "IELTS",
    description:
      "Get ready for the IELTS with expert tips and exercises for reading, writing, listening, and speaking.",
    image: IELTS,
    slug: "ielts",
  },
  {
    name: "GRE",
    description:
      "Get ready for the IELTS with expert tips and exercises for reading, writing, listening, and speaking.",
    image: GRE,
    slug: "gre",
  },
];


const Courses = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-5 py-10">
        <h1 className="text-4xl font-bold text-center mb-10 text-[#5a38a7]">
          Our Courses
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              name={course.name}
              description={course.description}
              image={course.image}
              slug={course.slug}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
