import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center h-screen bg-gray-100">
        <h1>Welcome to Contact Us page</h1>
      </div>
      <Footer />
    </div>
  );
};
export default ContactUs;
