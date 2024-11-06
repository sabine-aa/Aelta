import React from "react";
import logo from "../assets/logoAelta.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="text-white py-6" style={{ backgroundColor: "#360182" }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-2">
          <div className="text-center lg:text-left ">
            <h2 className="text-lg font-bold mb-4">Follow Us</h2>
            <div className="flex justify-center lg:justify-start mb-4">
              <img
                src={logo}
                alt="logo"
                className="mx-auto md:mx-0 my-2 w-28"
              />
            </div>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a
                href="https://www.facebook.com/share/n54mMP1Qufzgsbz1/"
                target="_blank"
                className="hover:text-[#b3902f]"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/aelta.lb?igsh=d2RzbG9rdzF1ZnVy"
                target="_blank"
                className="hover:text-[#b3902f]"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="hover:text-[#b3902f]"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="text-center lg:text-left ">
            <h2 className="text-lg font-bold mb-4">Pages</h2>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-[#b3902f]">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#b3902f]">
                  About Us
                </a>
              </li>
              <li>
                <a href="/courses" className="hover:text-[#b3902f]">
                  Courses
                </a>
              </li>
              <li>
                <a href="/blogs" className="hover:text-[#b3902f]">
                  Blogs
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center lg:text-left ">
            <h2 className="text-lg font-bold mb-4">Courses</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#b3902f]">
                  SAT
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#b3902f]">
                  TOEFL
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#b3902f]">
                  IELTS
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center lg:text-left ">
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <p className="mb-2"> Phone: +961 81 696751</p>
            <p className="mb-2">Email: aelta2024@gmail.com</p>
            <p>Location: Aley, Saraya Street, Baz Center</p>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-sm">© 2024 My Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
