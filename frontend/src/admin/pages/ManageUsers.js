import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";
import AdminFooter from "../components/AdminFooter";
import DataTable from "../components/DataTable";

const ManageUsers = () => {
  const columns = ["First Name", "Last Name", "Email", "Actions"];
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [selectedUser, setSelectedUser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      console.warn("No token found! Ensure the user is logged in.");
    }
  }, []);

  // Fetch all users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "https://aelta.onrender.com/api/users/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  // Handle input changes for creating a user
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  // Handle form submission for creating a new user
  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://aelta.onrender.com/api/create",
        newUser,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Refetch users after creating a new one
      const updatedUsers = await axios.get(
        "https://aelta.onrender.com/api/users/",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUsers(updatedUsers.data);

      setNewUser({ firstName: "", lastName: "", email: "", password: "" });
    } catch (error) {
      console.error(
        "Error creating user:",
        error.response?.data?.message || error.message
      );
    }
  };

  // Handle updating a user
  const handleUpdateUser = (userId) => {
    const userToUpdate = users.find((user) => user._id === userId);
    setSelectedUser({ ...userToUpdate });
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const updatedUserData = { ...selectedUser };

      // Remove password if empty to prevent overwriting with empty string
      if (!selectedUser.password) {
        delete updatedUserData.password;
      }

      const response = await axios.put(
        `http://localhost:5000/api/users/${selectedUser._id}`,
        updatedUserData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      window.location.reload(); // Refresh the page after update

      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === selectedUser._id ? response.data : user
        )
      );
      setSelectedUser(null);
    } catch (error) {
      console.error(
        "Error updating user:",
        error.response?.data?.message || error.message
      );
    }
  };

  // Handle deleting a user
  const handleDeleteUser = async (userId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to permanently delete this user?"
    );
    if (!confirmDelete) return;
    try {
      // Make the DELETE request to the backend
      await axios.delete(`https://aelta.onrender.com/api/users/${userId}`);
      // Update the state to remove the deleted user
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
      console.log("User deleted successfully");
    } catch (error) {
      console.error(
        "Error deleting user:",
        error.response?.data?.message || error.message
      );
    }
  };

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-x-hidden">
        <AdminNavbar />
        <div className="p-6 space-y-6">
          <h1 className="text-2xl font-bold">Manage Users</h1>

          {/* Create User Form */}
          <form
            onSubmit={handleCreateUser}
            className="space-y-4 p-4 bg-white border rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold">Create New User</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={newUser.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                className="p-2 border rounded-md"
                required
              />
              <input
                type="text"
                name="lastName"
                value={newUser.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                className="p-2 border rounded-md"
                required
              />
              <input
                type="email"
                name="email"
                value={newUser.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="p-2 border rounded-md"
                required
              />
              <input
                type="password"
                name="password"
                value={newUser.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="p-2 border rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Create User
            </button>
          </form>

          {/* Edit User Form */}
          {selectedUser && (
            <form
              onSubmit={handleUpdateSubmit}
              className="space-y-4 p-4 bg-white border rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold">Edit User</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={selectedUser.firstName}
                  onChange={(e) =>
                    setSelectedUser({
                      ...selectedUser,
                      firstName: e.target.value,
                    })
                  }
                  placeholder="First Name"
                  className="p-2 border rounded-md"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={selectedUser.lastName}
                  onChange={(e) =>
                    setSelectedUser({
                      ...selectedUser,
                      lastName: e.target.value,
                    })
                  }
                  placeholder="Last Name"
                  className="p-2 border rounded-md"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={selectedUser.email}
                  onChange={(e) =>
                    setSelectedUser({
                      ...selectedUser,
                      email: e.target.value,
                    })
                  }
                  placeholder="Email"
                  className="p-2 border rounded-md"
                  required
                />
                <input
                  type="password"
                  name="password"
                  value={selectedUser.password}
                  onChange={(e) =>
                    setSelectedUser({
                      ...selectedUser,
                      password: e.target.value,
                    })
                  }
                  placeholder="Password"
                  className="p-2 border rounded-md"
                />
              </div>
              <button
                type="submit"
                className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Update User
              </button>
            </form>
          )}

          {/* Users Data Table */}
          <div className="overflow-x-auto">
            <DataTable
              columns={columns}
              data={users.map((user) => ({
                "First Name": user.firstName,
                "Last Name": user.lastName,
                Email: user.email,
                Actions: (
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleUpdateUser(user._id)}
                      className="p-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                ),
              }))}
            />
          </div>
        </div>
        <AdminFooter />
      </div>
    </div>
  );
};

export default ManageUsers;
