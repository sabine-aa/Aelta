import Course from "../models/Course.js";

// Get all courses
export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    const coursesWithImageUrls = courses.map((course) => ({
      ...course._doc,
      imageUrl: course.image ? `/api/courses/image/${course._id}` : null,
    }));
    res.status(200).json(coursesWithImageUrls);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single course by slug
export const getCourseBySlug = async (req, res) => {
  try {
    const course = await Course.findOne({ slug: req.params.slug });
    if (!course) return res.status(404).json({ message: "Course not found" });

    res.status(200).json({
      ...course._doc,
      imageUrl: course.image ? `/api/courses/image/${course._id}` : null,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new course
export const createCourse = async (req, res) => {
  try {
    const { name, description, slug } = req.body;
    const courseData = { name, description, slug };

    if (req.file) {
      courseData.image = req.file.path; // Cloudinary image URL
    }

    const course = new Course(courseData);
    await course.save();

    res.status(201).json({ message: "Course created successfully", course });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a course
export const updateCourse = async (req, res) => {
  try {
    const updatedData = { ...req.body };
    if (req.file) {
      updatedData.image = req.file.path;
    }

    const course = await Course.findOneAndUpdate(
      { slug: req.params.slug },
      updatedData,
      { new: true, runValidators: true }
    );

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json(course);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a course
export const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findOneAndDelete({ slug: req.params.slug });
    if (!course) return res.status(404).json({ message: "Course not found" });

    res.status(200).json({ message: "Course deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
