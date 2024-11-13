import Blog from "../../models/blogModel.js";

export const getAllBlogs = async (_, res) => {
  const blogs = await Blog.find();
  res.status(200).json(blogs);
};
