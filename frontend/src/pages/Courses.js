import React, { useState, useEffect } from "react";
import CourseCard from "../components/CourseCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/courses");
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        const data = await response.json();
        setCourses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <Navbar />
      <div
        className="relative bg-cover bg-center h-80"
        // style={{ backgroundImage: `url(${coursesCover})` }}
      >
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-white pl-5 sm:pl-24 md:pl-48 lg:pl-80">
            Our Courses
          </h1>
        </div>
      </div>
      <div className="container mx-auto p-5">
        <h1 className="text-3xl text-[#5a38a7] font-bold mb-5">
          Explore Our Courses
        </h1>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : courses.length === 0 ? (
          <p>No courses available at the moment.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {courses.map((course) => (
              <CourseCard
                key={course._id}
                name={course.name}
                description={course.description}
                image={course.image || "/images/default-course.jpg"}
                slug={course.slug}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
