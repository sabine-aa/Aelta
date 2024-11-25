import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminNavbar from "../components/AdminNavbar";
// import AdminSidebar from "../components/AdminSidebar";
import AdminFooter from "../components/AdminFooter";
import DataTable from "../components/DataTable";

const ManageBlogs = () => {
  const columns = ["Title", "Author", "Created At", "Actions"];
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({
    title: "",
    description: "",
    image: "",
    content: "",
    largeDescription: "",
    slug: "",
    author: "",
  });
  const [selectedBlog, setSelectedBlog] = useState(null); // Track selected blog for updating

  // Fetch all blogs when component is mounted
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/blogs");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  // Handle input changes for the new blog form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

  // Create a new blog post
  const handleCreateBlog = async (e) => {
    e.preventDefault();
    console.log("Creating blog with data:", newBlog); // Log the data to check the structure

    try {
      const response = await axios.post(
        "http://localhost:5000/api/blogs",
        newBlog
      );
      setBlogs([...blogs, response.data]);
      setNewBlog({
        title: "",
        description: "",
        image: "",
        content: "",
        largeDescription: "",
        slug: "",
        author: "",
      });
    } catch (error) {
      console.error("Error creating blog:", error);
      console.log(error.response.data); // Log the backend error message
    }
  };

  // Update an existing blog
  const handleUpdateBlog = (slug) => {
    const blogToUpdate = blogs.find((blog) => blog.slug === slug);
    setSelectedBlog(blogToUpdate); // Set the selected blog for editing
  };

  // Handle form submission for updating a blog
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    // Debugging: Ensure selectedBlog contains the correct data
    console.log("Selected Blog before update:", selectedBlog);

    if (!selectedBlog?.slug) {
      console.error("Slug is missing. Cannot update the blog.");
      return;
    }

    try {
      // Make PUT request with proper headers
      const response = await axios.put(
        `http://localhost:5000/api/blogs/${selectedBlog.slug}`, // Backend API
        selectedBlog, // Data to update
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Update blogs list with the updated blog
      setBlogs(
        blogs.map((blog) =>
          blog.slug === selectedBlog.slug ? response.data : blog
        )
      );

      // Reset the selected blog
      setSelectedBlog(null);
    } catch (error) {
      console.error("Error updating blog:", error);
      console.error("Backend error:", error.response?.data);
    }
  };

  // Delete a blog
  const handleDeleteBlog = async (slug) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/blogs/${slug}`
      );
      setBlogs(blogs.filter((blog) => blog.slug !== slug)); // Remove deleted blog from the list
    } catch (error) {
      console.error("Error deleting blog:", error);
      console.log(error.response.data); // Log the error message from the backend
    }
  };

  return (
    <div className="flex">
      {/* // <AdminSidebar /> */}
      <div className="flex-1">
        <AdminNavbar />
        <div className="p-20">
          <h1 className="text-2xl font-bold mb-4">Manage Blogs</h1>

          {/* Create Blog Form */}
          <form
            onSubmit={handleCreateBlog}
            className="mb-6 space-y-4 p-4 border rounded-md shadow-md"
          >
            <h3 className="text-xl font-semibold">Create New Blog</h3>
            <div className="space-y-2">
              <input
                type="text"
                name="title"
                value={newBlog.title}
                onChange={handleInputChange}
                placeholder="Blog Title"
                className="w-full p-2 border rounded-md"
              />
              <textarea
                name="description"
                value={newBlog.description}
                onChange={handleInputChange}
                placeholder="Blog Description"
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                name="image"
                value={newBlog.image}
                onChange={handleInputChange}
                placeholder="Image URL"
                className="w-full p-2 border rounded-md"
              />
              <textarea
                name="content"
                value={newBlog.content}
                onChange={handleInputChange}
                placeholder="Blog Content"
                className="w-full p-2 border rounded-md"
              />
              <textarea
                name="largeDescription"
                value={newBlog.largeDescription}
                onChange={handleInputChange}
                placeholder="Large Description"
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                name="slug"
                value={newBlog.slug}
                onChange={handleInputChange}
                placeholder="Blog Slug"
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                name="author"
                value={newBlog.author}
                onChange={handleInputChange}
                placeholder="Author Name"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Create Blog
            </button>
          </form>

          {/* Edit Blog Form if a blog is selected */}
          {selectedBlog && (
            <form
              onSubmit={handleUpdateSubmit}
              className="mb-6 space-y-4 p-4 border rounded-md shadow-md"
            >
              <h3 className="text-xl font-semibold">Edit Blog</h3>
              <div className="space-y-2">
                <input
                  type="text"
                  name="title"
                  value={selectedBlog.title}
                  onChange={(e) =>
                    setSelectedBlog({ ...selectedBlog, title: e.target.value })
                  }
                  placeholder="Blog Title"
                  className="w-full p-2 border rounded-md"
                />
                <textarea
                  name="description"
                  value={selectedBlog.description}
                  onChange={(e) =>
                    setSelectedBlog({
                      ...selectedBlog,
                      description: e.target.value,
                    })
                  }
                  placeholder="Blog Description"
                  className="w-full p-2 border rounded-md"
                />
                <input
                  type="text"
                  name="image"
                  value={selectedBlog.image}
                  onChange={(e) =>
                    setSelectedBlog({ ...selectedBlog, image: e.target.value })
                  }
                  placeholder="Image URL"
                  className="w-full p-2 border rounded-md"
                />
                <textarea
                  name="content"
                  value={selectedBlog.content}
                  onChange={(e) =>
                    setSelectedBlog({
                      ...selectedBlog,
                      content: e.target.value,
                    })
                  }
                  placeholder="Blog Content"
                  className="w-full p-2 border rounded-md"
                />
                <textarea
                  name="largeDescription"
                  value={selectedBlog.largeDescription}
                  onChange={(e) =>
                    setSelectedBlog({
                      ...selectedBlog,
                      largeDescription: e.target.value,
                    })
                  }
                  placeholder="Large Description"
                  className="w-full p-2 border rounded-md"
                />
                <input
                  type="text"
                  name="slug"
                  value={selectedBlog.slug}
                  onChange={(e) =>
                    setSelectedBlog({ ...selectedBlog, slug: e.target.value })
                  }
                  placeholder="Blog Slug"
                  className="w-full p-2 border rounded-md"
                />
                <input
                  type="text"
                  name="author"
                  value={selectedBlog.author}
                  onChange={(e) =>
                    setSelectedBlog({
                      ...selectedBlog,
                      author: e.target.value,
                    })
                  }
                  placeholder="Author Name"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <button
                type="submit"
                className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Update Blog
              </button>
            </form>
          )}

          {/* Display Blogs in Data Table */}
          <DataTable
            columns={columns}
            data={blogs.map((blog) => ({
              Title: blog.title,
              Author: blog.author,
              "Created At": new Date(blog.date).toLocaleDateString(),
              Actions:
                blog.slug === selectedBlog?.slug ? (
                  <div>Editing...</div> // You can display "Editing..." or other info
                ) : (
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleUpdateBlog(blog.slug)} // Update button
                      className="p-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDeleteBlog(blog.slug)}
                      className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                ),
            }))}
          />
        </div>
        <AdminFooter />
      </div>
    </div>
  );
};

export default ManageBlogs;
