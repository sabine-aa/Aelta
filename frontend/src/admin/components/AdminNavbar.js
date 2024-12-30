// import React from "react";

// const AdminNavbar = () => {
//   return (
//     <nav className="bg-gray-800 p-4 sticky top-0 z-10">
//       <div className="text-white text-xl">Admin Dashboard</div>
//     </nav>
//   );
// };

// export default AdminNavbar;
import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token"); // Ensure the token is stored in localStorage after login
    if (token) {
      const decoded = jwtDecode(token);
      setUserEmail(decoded.email); // Extract email from the decoded token
    }
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token
    navigate("/admin/login"); // Redirect to the login page
  };

  return (
    <nav className="bg-gray-800 text-white p-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-semibold">Admin Dashboard</h1>
        <div className="relative">
          <FaUserCircle
            className="text-3xl mr-10 cursor-pointer hover:text-gray-400"
            onClick={toggleDropdown}
          />
          {dropdownVisible && (
            <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-md w-48">
              <div className="p-4 border-b">
                <p className="text-sm">Logged in as:</p>
                <p className="font-semibold">{userEmail || "Loading..."}</p>
              </div>
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
