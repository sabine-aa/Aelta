import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";
import SponsorSlider from "../components/SponsorSlider";
import teacher from "../assets/teacher.png";

const Home = () => {
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
                <h2 className="text-2xl font-bold mb-4">
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
                src={teacher} // Use your actual image source
                alt="A descriptive alt text"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
