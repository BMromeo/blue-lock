import Blog from "../../models/blogModel.js";

export const getBlogById = (req, res) => {
  const { id } = req.params;
  console.log({ id });
  const blog = Blog.getById(id);
  if (!blog) {
    return res.status(404).json({ message: "Blog not found" });
  }
  res.status(200).json(blog);
};
