import Blog from "../models/Blog.js";
import mongodb from "mongodb";

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    const blogsWithImageUrls = blogs.map((blog) => ({
      ...blog._doc,
      imageUrl: blog.image ? `/api/blogs/image/${blog._id}` : null,
    }));
    res.status(200).json(blogsWithImageUrls);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    res.status(200).json({
      ...blog._doc,
      imageUrl: blog.image ? `/api/blogs/image/${blog._id}` : null,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createBlog = async (req, res) => {
  console.log("Received blog data:", req.body);

  const { title, description, slug, date, content, largeDescription, author } =
    req.body;

  try {
    const blogData = {
      title,
      description,
      slug,
      date: date || new Date(),
      content,
      largeDescription,
      author,
    };

    // Check for uploaded file and include Cloudinary URL
    if (req.file) {
      blogData.image = req.file.path; // Cloudinary auto-generates URL
    }

    const blog = new Blog(blogData);
    await blog.save();

    res.status(201).json({ message: "Blog created successfully", blog });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateBlog = async (req, res) => {
  try {
    console.log("Request params (slug):", req.params.slug);
    console.log("Request body:", req.body);
    console.log("Request file:", req.file);

    // Check if there's a new image file
    const updatedData = { ...req.body };
    if (req.file) {
      updatedData.image = req.file.path; // Cloudinary provides the file URL in `file.path`
    }

    const blog = await Blog.findOneAndUpdate(
      { slug: req.params.slug },
      updatedData,
      { new: true, runValidators: true }
    );

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json(blog); // Send updated blog data
  } catch (err) {
    console.error("Backend error:", err.message);
    res.status(400).json({ message: err.message });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findOneAndDelete({ slug: req.params.slug });
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { getAllBlogs, getBlogBySlug, createBlog, updateBlog, deleteBlog };
