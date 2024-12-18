// import React from "react";
// import { Link } from "react-router-dom";

// const AdminSidebar = () => {
//   return (
//     <div className="w-64 h-screen bg-gray-900 text-white sticky top-0">
//       <ul className="space-y-4 p-4">
//         <li>
//           <Link to="/admin/dashboard" className="hover:text-gray-300">
//             Dashboard
//           </Link>
//         </li>
//         <li>
//           <Link to="/admin/manage-blogs" className="hover:text-gray-300">
//             Manage Blogs
//           </Link>
//         </li>
//         <li>
//           <Link to="/admin/manage-courses" className="hover:text-gray-300">
//             Manage Courses
//           </Link>
//         </li>
//         <li>
//           <Link to="/admin/manage-teams" className="hover:text-gray-300">
//             Manage Teams
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default AdminSidebar;
// import React from "react";
// import { NavLink } from "react-router-dom";

// const AdminSidebar = () => {
//   const links = [
//     { name: "Manage Blogs", to: "/admin/manage-blogs" },
//     { name: "Manage Courses", to: "/admin/manage-courses" },
//     { name: "Manage Teams", to: "/admin/manage-teams" },
//   ];

//   return (
//     <aside className="bg-gray-700 text-white w-64 min-h-screen hidden sm:block">
//       <div className="p-4">
//         <h2 className="text-lg font-semibold mb-6">Admin Panel</h2>
//         <ul className="space-y-4">
//           {links.map((link) => (
//             <li key={link.name}>
//               <NavLink
//                 to={link.to}
//                 className={({ isActive }) =>
//                   `block p-2 rounded-md ${
//                     isActive ? "bg-gray-600" : "hover:bg-gray-600"
//                   }`
//                 }
//               >
//                 {link.name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </aside>
//   );
// };

// export default AdminSidebar;
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const links = [
    { name: "Manage Blogs", to: "/admin/manage-blogs" },
    { name: "Manage Courses", to: "/admin/manage-courses" },
    { name: "Manage Teams", to: "/admin/manage-teams" },
  ];

  return (
    <div className="relative">
      {/* Hamburger Icon (visible on md and smaller screens) */}
      {!isSidebarOpen && (
        <button
          className="fixed top-4 right-4 text-white z-50 md:hidden"
          onClick={() => setIsSidebarOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`bg-gray-700 text-white w-64 min-h-screen  p-4 fixed top-0 left-0 transform transition-all duration-300 md:sticky md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        {/* Close Button (visible on md and smaller screens) */}
        <button
          className="absolute top-4 right-4 text-white md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-lg font-semibold mb-6">Admin Panel</h2>
        <ul className="space-y-4">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `block p-2 rounded-md ${
                    isActive ? "bg-gray-600" : "hover:bg-gray-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>

      {/* Overlay (visible when sidebar is open on smaller screens) */}
      {isSidebarOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default AdminSidebar;
