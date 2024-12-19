
import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logoAelta.png";
import { NavLink, useLocation } from "react-router-dom";
import { debounce } from "lodash";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoWidth, setLogoWidth] = useState(80); 
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 100);

      const newLogoWidth = Math.max(56, Math.min(80 - scrollPosition / 10, 80));
      setLogoWidth(newLogoWidth);
    }, 10);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "bg-[#360182] h-18 text-[#360182]"
          : "bg-[#360182] text-white shadow-md"
      }`}
    >
      <div className="px-4">
        <div className="flex justify-between md:justify-around items-center h-25">
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo"
              className="mx-2 md:mx-2 my-2 transition-all"
              style={{ width: `${logoWidth}px` }} 
            />
            <div
              className={`text-white font-bold transition-all ${
                scrolled ? "text-2xl" : "text-3xl"
              }`}
            >
              AELTA
            </div>
          </div>
          <div className="hidden md:flex space-x-4">
            {["/", "/about", "/courses", "/blogs", "/contact"].map(
              (path, index) => (
                <NavLink
                  key={index}
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? `text-[#b3902f] px-3 py-2 rounded-md ${
                          scrolled ? "text-base" : "text-lg"
                        } font-small`
                      : `text-gray-300 hover:text-[#b3902f] px-3 py-2 rounded-md ${
                          scrolled ? "text-base" : "text-lg"
                        } font-small`
                  }
                >
                  {path === "/"
                    ? "Home"
                    : path.slice(1).replace(/^\w/, (c) => c.toUpperCase())}
                </NavLink>
              )
            )}
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
          {["Home", "About Us", "Courses", "Blogs", "Contact Us"].map(
            (name, index) => (
              <NavLink
                key={index}
                to={
                  name === "Home"
                    ? "/"
                    : `/${name.toLowerCase().replace(/\s/g, "")}`
                }
                className="text-gray-300 hover:bg-gray-500 hover:text-[#b3902f] px-3 py-2 rounded-md text-base font-medium"
              >
                {name}
              </NavLink>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
