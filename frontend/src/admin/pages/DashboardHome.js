import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pie, Bar } from "react-chartjs-2";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";
import AdminFooter from "../components/AdminFooter";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const Dashboard = () => {
  const [counts, setCounts] = useState({
    blogs: 0,
    users: 0,
  });

  const fetchCounts = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };

      // Fetch blogs and users count
      const responses = await Promise.all([
        axios.get("https://aelta.onrender.com/api/blogs/count", { headers }),
        axios.get("https://aelta.onrender.com/api/users/count", { headers }),
      ]);

      console.log("API Response:", responses);

      if (responses[0].data && responses[1].data) {
        setCounts({
          blogs: responses[0].data.count || 0,
          users: responses[1].data.count || 0,
        });
      } else {
        console.error("Unexpected API response structure", responses);
      }
    } catch (error) {
      console.error(
        "Error fetching counts:",
        error.response?.data?.message || error.message
      );
    }
  };

  useEffect(() => {
    fetchCounts();
  }, []);

  const pieData = {
    labels: ["Blogs", "Users"],
    datasets: [
      {
        data: [counts.blogs, counts.users],
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  const barData = {
    labels: ["Blogs", "Users"],
    datasets: [
      {
        label: "Count",
        data: [counts.blogs, counts.users],
        backgroundColor: ["#FF6384", "#36A2EB"],
        borderColor: ["#FF6384", "#36A2EB"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-x-hidden">
        <AdminNavbar />
        <div className="p-20">
          <h1 className="text-2xl font-bold">Welcome to the Admin Dashboard</h1>
          <p className="mt-4">Quick statistics and insights:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="p-6 bg-white border rounded-lg shadow-md text-center">
              <h2 className="text-lg font-semibold">Blogs</h2>
              <p className="text-3xl font-bold">{counts.blogs}</p>
            </div>
            <div className="p-6 bg-white border rounded-lg shadow-md text-center">
              <h2 className="text-lg font-semibold">Users</h2>
              <p className="text-3xl font-bold">{counts.users}</p>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold text-center">
                Blogs vs Users (Pie Chart)
              </h2>
              <div className="flex justify-center w-3/4 ml-20">
                <Pie data={pieData} />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-center">
                Blogs vs Users (Bar Chart)
              </h2>
              <div className="flex justify-center mt-12 ">
                <Bar data={barData} />
              </div>
            </div>
          </div>
        </div>
        <AdminFooter />
      </div>
    </div>
  );
};

export default Dashboard;
