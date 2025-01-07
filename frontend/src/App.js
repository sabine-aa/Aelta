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
import ManageUsers from "./admin/pages/ManageUsers";
import Login from "./admin/pages/AdminLogin";
import PrivateRoute from "./admin/components/PrivateRoute";

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
          <Route
            path="/admin-dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/manage-blogs"
            element={
              <PrivateRoute>
                <ManageBlogs />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/manage-courses"
            element={
              <PrivateRoute>
                <ManageCourses />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/manage-teams"
            element={
              <PrivateRoute>
                <ManageTeams />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/manage-users"
            element={
              <PrivateRoute>
                <ManageUsers />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
