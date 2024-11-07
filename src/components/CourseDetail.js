import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SAT from "../assets/sat.png";
import TOEFL from "../assets/toefl.png";
import IELTS from "../assets/ielts.png";

const courseData = {
  sat: {
    name: "SAT Preparation",
    description:
      "The SAT is a standardized test widely used for college admissions in the United States. Our SAT preparation course focuses on enhancing students' skills in critical reading, writing, and math, helping them achieve their target scores for college applications.",
    details:
      "Our SAT course offers in-depth training across all sections: Evidence-Based Reading, Writing and Language, and Math. We provide tailored practice sessions, simulated exams, and proven test-taking strategies to help students excel. Our instructors ensure that students build the confidence and skills needed to tackle the SAT and secure admission to their desired college.",
    preparationSection: `
      <div class="preparation">
        <h2 class="text-2xl font-bold text-[#360182] mb-4">Our Approach to SAT Preparation</h2>
        <p class="text-lg text-gray-700 mb-6">
          We equip students with the necessary skills for college admissions by focusing on critical reading, effective writing, and math problem-solving. Our program emphasizes real-world practice and personalized strategies to build confidence and readiness for the SAT.
        </p>
        <h3 class="text-xl font-semibold text-[#360182] mb-3">Setting the Stage for College Success</h3>
        <p class="text-lg text-gray-700 mb-6">
          Excelling on the SAT can open doors to prestigious universities and scholarship opportunities. Our SAT preparation not only boosts test scores but also empowers students with lifelong skills, helping them start their college journey on a solid foundation.
        </p>
      </div>
    `,
    image: SAT,
  },
  toefl: {
    name: "TOEFL Preparation",
    description:
      "The TOEFL (Test of English as a Foreign Language) is essential for students looking to study in English-speaking countries. Our TOEFL course focuses on the four core language skills: reading, listening, speaking, and writing, preparing students for successful communication in academic environments.",
    details:
      "Our TOEFL preparation course provides detailed practice in each skill area with targeted exercises and real exam simulations. Students engage in interactive lessons, listening exercises, and essay writing to build fluency and accuracy. We also provide personalized feedback to ensure students are fully prepared to meet the TOEFL requirements of top universities worldwide.",
    preparationSection: `
      <div class="preparation">
        <h2 class="text-2xl font-bold text-[#360182] mb-4">Our Approach to TOEFL Preparation</h2>
        <p class="text-lg text-gray-700 mb-6">
          Through tailored practice, real-time simulations, and language mastery exercises, we ensure students are ready to excel on the TOEFL. This course builds each student's confidence, language fluency, and readiness for academic success in English-speaking environments.
        </p>
        <h3 class="text-xl font-semibold text-[#360182] mb-3">Building Language Skills for Global Opportunities</h3>
        <p class="text-lg text-gray-700 mb-6">
          A strong TOEFL score can pave the way for academic and professional achievements in English-speaking countries. Our program provides students with the linguistic and cultural knowledge to thrive in their studies abroad and beyond.
        </p>
      </div>
    `,
    image: TOEFL,
  },
  ielts: {
    name: "IELTS Preparation",
    description:
      "The IELTS (International English Language Testing System) is used globally to assess English proficiency for education, immigration, and employment. Our IELTS course offers rigorous preparation in reading, writing, listening, and speaking to help students reach their desired score.",
    details:
      "In our IELTS preparation program, students gain practical experience through mock exams, speaking sessions, and targeted exercises for each test section. Our tutors provide tips on time management, structure, and language use, equipping students with the skills to succeed on the IELTS and open doors to international opportunities.",
    preparationSection: `
      <div class="preparation">
        <h2 class="text-2xl font-bold text-[#360182] mb-4">Our Approach to IELTS Preparation</h2>
        <p class="text-lg text-gray-700 mb-6">
          We offer in-depth training across all test sections, focusing on linguistic precision, fluency, and strategic exam techniques. Our course prepares students to achieve high scores, meeting the IELTS requirements of top institutions and employers worldwide.
        </p>
        <h3 class="text-xl font-semibold text-[#360182] mb-3">Empowering Students for International Success</h3>
        <p class="text-lg text-gray-700 mb-6">
          IELTS preparation at our academy goes beyond test scores; we develop students' skills for effective communication and adaptation in diverse cultures, setting the stage for success in global academic and professional environments.
        </p>
      </div>
    `,
    image: IELTS,
  },
};

const CourseDetail = () => {
  const { slug } = useParams();
  const course = courseData[slug];

  if (!course) {
    return <p className="text-center mt-10">Course not found</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-5 py-10">
        <h1 className="text-4xl font-bold text-center mb-5 text-[#5a38a7]">
          {course.name}
        </h1>
        <img
          src={course.image}
          alt={course.name}
          className="w-full h-64 object-cover rounded-lg mb-5"
        />
        <p className="text-lg text-gray-700 mb-5">{course.description}</p>
        <p className="text-gray-600">{course.details}</p>
        <p className="text-lg text-gray-700  my-5">
          <div dangerouslySetInnerHTML={{ __html: course.preparationSection }} />
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetail;
