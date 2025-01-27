import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";
import AdminFooter from "../components/AdminFooter";
import DataTable from "../components/DataTable";

const ManageCourses = () => {
  const columns = ["Name", "Description", "Image", "Slug", "Actions"];
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    name: "",
    description: "",
    image: "",
    slug: "",
  });
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Fetch all courses
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/courses");
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  // Create new course
  const handleCreateCourse = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", newCourse.name);
    formData.append("description", newCourse.description);
    formData.append("slug", newCourse.slug);
    if (newCourse.image) {
      formData.append("image", newCourse.image);
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/courses",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setCourses([...courses, response.data.course]);
      // Refresh the page after successful course creation
      window.location.reload();
    } catch (error) {
      console.error("Error creating course:", error);
    }
  };

  // Update course
  const handleUpdateCourse = (slug) => {
    const courseToUpdate = courses.find((course) => course.slug === slug);
    setSelectedCourse({ ...courseToUpdate, originalSlug: courseToUpdate.slug });
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", selectedCourse.name);
    formData.append("description", selectedCourse.description);
    formData.append("slug", selectedCourse.slug);
    if (selectedCourse.image && selectedCourse.image instanceof File) {
      formData.append("image", selectedCourse.image);
    }

    try {
      const response = await axios.put(
        `http://localhost:5000/api/courses/${selectedCourse.originalSlug}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setCourses((prevCourses) =>
        prevCourses.map((course) =>
          course.slug === selectedCourse.originalSlug ? response.data : course
        )
      );
      setSelectedCourse(null);
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  // Delete Course
  const handleDeleteCourse = async (slug) => {
    try {
      await axios.delete(`http://localhost:5000/api/courses/${slug}`);
      setCourses(courses.filter((course) => course.slug !== slug));
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedCourse((prev) => ({ ...prev, image: file }));
  };

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-x-hidden">
        <AdminNavbar />
        <div className="p-6 space-y-6">
          <h1 className="text-2xl font-bold">Manage Courses</h1>

          {/* Create Course Form */}
          <form
            onSubmit={handleCreateCourse}
            className="space-y-4 p-4 bg-white border rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold">Create New Course</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={newCourse.name}
                onChange={handleInputChange}
                placeholder="Course Name"
                className="p-2 border rounded-md"
              />
              <input
                type="text"
                name="slug"
                value={newCourse.slug}
                onChange={handleInputChange}
                placeholder="Slug"
                className="p-2 border rounded-md"
              />
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={(e) =>
                  setNewCourse({ ...newCourse, image: e.target.files[0] })
                }
              />
              <textarea
                name="description"
                value={newCourse.description}
                onChange={handleInputChange}
                placeholder="Description"
                className="p-2 border rounded-md md:col-span-2"
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Create Course
            </button>
          </form>

          {/* Edit Course Form */}
          {selectedCourse && (
            <form
              onSubmit={handleUpdateSubmit}
              className="space-y-4 p-4 bg-white border rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold">Edit Course</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="title"
                  value={selectedCourse.name}
                  onChange={(e) =>
                    setSelectedCourse({
                      ...selectedCourse,
                      name: e.target.value,
                    })
                  }
                  placeholder="name Title"
                  className="p-2 border rounded-md"
                />
                <input
                  type="text"
                  name="slug"
                  value={selectedCourse.slug}
                  onChange={(e) =>
                    setSelectedCourse({
                      ...selectedCourse,
                      slug: e.target.value,
                    })
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
                  value={selectedCourse.description}
                  onChange={(e) =>
                    setSelectedCourse({
                      ...selectedCourse,
                      description: e.target.value,
                    })
                  }
                  placeholder="Description"
                  className="p-2 border rounded-md md:col-span-2"
                />
              </div>
              <button
                type="submit"
                className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Update Course
              </button>
            </form>
          )}

          {/* Course Data Table */}
          <div className="overflow-x-auto">
            <DataTable
              columns={columns}
              data={courses.map((course) => ({
                Name: course.name,
                Description: course.description,
                Image: (
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-20 w-20 object-cover rounded-md"
                  />
                ),
                Slug: course.slug,

                Actions: (
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleUpdateCourse(course.slug)}
                      className="p-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDeleteCourse(course.slug)}
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

export default ManageCourses;
