import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";
import AdminFooter from "../components/AdminFooter";
import DataTable from "../components/DataTable";

const ManageCourses = () => {
  const columns = ["Title", "Author", "Created At", "Actions"];
  const data = [
    { Title: "Course 1", Author: "Admin", "Created At": "2024-11-01" },
    { Title: "Course 2", Author: "Editor", "Created At": "2024-11-02" },
  ];

  return (
    <div className="flex">
      <AdminSidebar />
      
        <AdminNavbar />
        <div className="flex-1">
        <div className="p-20">
          <h1 className="text-2xl font-bold mb-4">Manage Courses</h1>
          <DataTable columns={columns} data={data} />
        </div>
        <AdminFooter />
      </div>
    </div>
  );
};

export default ManageCourses;
