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
import React from "react";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  const links = [
    { name: "Manage Blogs", to: "/admin/manage-blogs" },
    { name: "Manage Courses", to: "/admin/manage-courses" },
    { name: "Manage Teams", to: "/admin/manage-teams" },
  ];

  return (
    <aside className="bg-gray-700 text-white w-64 min-h-screen hidden sm:block">
      <div className="p-4">
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
      </div>
    </aside>
  );
};

export default AdminSidebar;
