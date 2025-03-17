import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";
import AdminFooter from "../components/AdminFooter";
import DataTable from "../components/DataTable";

const ManageBlogs = () => {
  const columns = [
    "Title",
    "Description",
    "Image",
    "Content",
    "LargeDescription",
    "Slug",
    "Author",
    "Created At",
    "Actions",
  ];
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
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Fetch all blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "https://aelta.onrender.com/api/blogs"
        );
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

  // Create new blog
  const handleCreateBlog = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", newBlog.title);
    formData.append("description", newBlog.description);
    formData.append("content", newBlog.content);
    formData.append("largeDescription", newBlog.largeDescription);
    formData.append("slug", newBlog.slug);
    formData.append("author", newBlog.author);
    if (newBlog.image) {
      formData.append("image", newBlog.image);
    }

    try {
      const response = await axios.post(
        "https://aelta.onrender.com/api/blogs",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setBlogs([...blogs, response.data.blog]);
      // Refresh the page after successful blog creation
      window.location.reload();
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  // Update blog
  const handleUpdateBlog = (slug) => {
    const blogToUpdate = blogs.find((blog) => blog.slug === slug);
    setSelectedBlog({ ...blogToUpdate, originalSlug: blogToUpdate.slug });
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", selectedBlog.title);
    formData.append("description", selectedBlog.description);
    formData.append("content", selectedBlog.content);
    formData.append("largeDescription", selectedBlog.largeDescription);
    formData.append("slug", selectedBlog.slug);
    formData.append("author", selectedBlog.author);
    if (selectedBlog.image && selectedBlog.image instanceof File) {
      formData.append("image", selectedBlog.image);
    }

    try {
      const response = await axios.put(
        `https://aelta.onrender.com/api/blogs/${selectedBlog.originalSlug}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setBlogs((prevBlogs) =>
        prevBlogs.map((blog) =>
          blog.slug === selectedBlog.originalSlug ? response.data : blog
        )
      );
      setSelectedBlog(null);
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  // Delete blog
  const handleDeleteBlog = async (slug) => {
    try {
      await axios.delete(`https://aelta.onrender.com/api/blogs/${slug}`);
      setBlogs(blogs.filter((blog) => blog.slug !== slug));
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedBlog((prev) => ({ ...prev, image: file }));
  };

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-x-hidden">
        <AdminNavbar />
        <div className="p-6 space-y-6">
          <h1 className="text-2xl font-bold">Manage Blogs</h1>

          {/* Create Blog Form */}
          <form
            onSubmit={handleCreateBlog}
            className="space-y-4 p-4 bg-white border rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold">Create New Blog</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="title"
                value={newBlog.title}
                onChange={handleInputChange}
                placeholder="Blog Title"
                className="p-2 border rounded-md"
              />
              <input
                type="text"
                name="author"
                value={newBlog.author}
                onChange={handleInputChange}
                placeholder="Author Name"
                className="p-2 border rounded-md"
              />
              <input
                type="text"
                name="slug"
                value={newBlog.slug}
                onChange={handleInputChange}
                placeholder="Slug"
                className="p-2 border rounded-md"
              />
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={(e) =>
                  setNewBlog({ ...newBlog, image: e.target.files[0] })
                }
              />
              <textarea
                name="description"
                value={newBlog.description}
                onChange={handleInputChange}
                placeholder="Description"
                className="p-2 border rounded-md md:col-span-2"
              />
              <textarea
                name="content"
                value={newBlog.content}
                onChange={handleInputChange}
                placeholder="Content"
                className="p-2 border rounded-md md:col-span-2"
              />
              <textarea
                name="largeDescription"
                value={newBlog.largeDescription}
                onChange={handleInputChange}
                placeholder="Large Description"
                className="p-2 border rounded-md md:col-span-2"
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Create Blog
            </button>
          </form>

          {/* Edit Blog Form */}
          {selectedBlog && (
            <form
              onSubmit={handleUpdateSubmit}
              className="space-y-4 p-4 bg-white border rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold">Edit Blog</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="title"
                  value={selectedBlog.title}
                  onChange={(e) =>
                    setSelectedBlog({ ...selectedBlog, title: e.target.value })
                  }
                  placeholder="Blog Title"
                  className="p-2 border rounded-md"
                />
                <input
                  type="text"
                  name="author"
                  value={selectedBlog.author}
                  onChange={(e) =>
                    setSelectedBlog({ ...selectedBlog, author: e.target.value })
                  }
                  placeholder="Author Name"
                  className="p-2 border rounded-md"
                />
                <input
                  type="text"
                  name="slug"
                  value={selectedBlog.slug}
                  onChange={(e) =>
                    setSelectedBlog({ ...selectedBlog, slug: e.target.value })
                  }
                  placeholder="Slug"
                  className="p-2 border rounded-md"
                />

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
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
                  placeholder="Description"
                  className="p-2 border rounded-md md:col-span-2"
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
                  placeholder="Content"
                  className="p-2 border rounded-md md:col-span-2"
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
                  className="p-2 border rounded-md md:col-span-2"
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

          {/* Blogs Data Table */}
          <div className="overflow-x-auto">
            <DataTable
              columns={columns}
              data={blogs.map((blog) => ({
                Title: blog.title,
                Description: blog.description,
                Image: (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-20 w-20 object-cover rounded-md"
                  />
                ),
                Content: blog.content,
                LargeDescription: blog.largeDescription,
                Slug: blog.slug,
                Author: blog.author,
                "Created At": new Date(blog.date).toLocaleDateString(),
                Actions: (
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleUpdateBlog(blog.slug)}
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
        </div>
        <AdminFooter />
      </div>
    </div>
  );
};

export default ManageBlogs;
