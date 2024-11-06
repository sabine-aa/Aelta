import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logoAelta.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "bg-[#360182] h-20 text-[#360182]"
          : "bg-[#360182] text-white shadow-md"
      }`}
    >
      <div className="px-4">
        <div className="flex justify-between md:justify-around items-center h-25">
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo"
              className={`mx-2 md:mx-2 my-2 w-20 transition-all ${
                scrolled ? "w-16" : "w-20"
              }`}
            />
            <div
              className={`text-white font-bold text-3xl transition-all ${
                scrolled ? "text-2xl" : "text-3xl"
              }`}
            >
              AELTA
            </div>
          </div>
          <div className="hidden md:flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#b3902f] px-3 py-2 rounded-md text-lg font-small"
                  : "text-gray-300 hover:text-[#b3902f] px-3 py-2 rounded-md text-lg font-small"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-[#b3902f] px-3 py-2 rounded-md text-lg font-small"
                  : "text-gray-300 hover:text-[#b3902f] px-3 py-2 rounded-md text-lg font-small"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive
                  ? "text-[#b3902f] px-3 py-2 rounded-md text-lg font-small"
                  : "text-gray-300 hover:text-[#b3902f] px-3 py-2 rounded-md text-lg font-small"
              }
            >
              Courses
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? "text-[#b3902f] px-3 py-2 rounded-md text-lg font-small"
                  : "text-gray-300 hover:text-[#b3902f] px-3 py-2 rounded-md text-lg font-small"
              }
            >
              Blogs
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-[#b3902f] px-3 py-2 rounded-md text-lg font-small"
                  : "text-gray-300 hover:text-[#b3902f] px-3 py-2 rounded-md text-lg font-small"
              }
            >
              Contact Us
            </NavLink>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="flex flex-col md:hidden ml-8"
          style={{ backgroundColor: "#360182" }}
        >
          <a
            href="/"
            className="text-gray-300 hover:bg-gray-500 hover:text-[#b3902f] px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-gray-300 hover:bg-gray-500 hover:text-[#b3902f] px-3 py-2 rounded-md text-base font-medium"
          >
            About Us
          </a>
          <a
            href="/courses"
            className="text-gray-300 hover:bg-gray-500 hover:text-[#b3902f] px-3 py-2 rounded-md text-base font-medium"
          >
            Courses
          </a>
          <a
            href="/blogs"
            className="text-gray-300 hover:bg-gray-500 hover:text-[#b3902f] px-3 py-2 rounded-md text-base font-medium"
          >
            Blogs
          </a>
          <a
            href="/contact"
            className="text-gray-300 hover:bg-gray-500 hover:text-[#b3902f] px-3 py-2 mb-2 rounded-md text-base font-medium"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
