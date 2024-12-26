import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Courses from "./pages/Courses";
import Blogs from "./pages/Blogs";
import BlogsDetails from "./components/BlogsDetails";
import ContactUs from "./pages/ContactUs";
import TeamDetail from "./components/TeamDetail";
import CourseDetail from "./components/CourseDetail";
import Dashboard from "./admin/pages/DashboardHome";
import ManageBlogs from "./admin/pages/ManageBlogs";
import ManageCourses from "./admin/pages/ManageCourses";
import ManageTeams from "./admin/pages/ManageTeams";
import Login from "./admin/pages/AdminLogin";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogsDetails />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/" element={<AboutUs />} />
          <Route path="/team/:slug" element={<TeamDetail />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:slug" element={<CourseDetail />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/admin/manage-blogs" element={<ManageBlogs />} />
          <Route path="/admin/manage-courses" element={<ManageCourses />} />
          <Route path="/admin/manage-teams" element={<ManageTeams />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
