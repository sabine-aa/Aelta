import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";
import AdminFooter from "../components/AdminFooter";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-x-hidden">
        <AdminNavbar />
        <div className="p-20">
          <h1 className="text-2xl font-bold">Welcome to the Admin Dashboard</h1>
          <p className="mt-4">Quick statistics and insights will go here.</p>
        </div>
        <AdminFooter />
      </div>
    </div>
  );
};

export default Dashboard;
