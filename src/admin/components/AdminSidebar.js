import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white sticky top-0">
      <ul className="space-y-4 p-4">
        <li>
          <Link to="/admin/dashboard" className="hover:text-gray-300">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/admin/manage-blogs" className="hover:text-gray-300">
            Manage Blogs
          </Link>
        </li>
        <li>
          <Link to="/admin/manage-courses" className="hover:text-gray-300">
            Manage Courses
          </Link>
        </li>
        <li>
          <Link to="/admin/manage-teams" className="hover:text-gray-300">
            Manage Teams
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
