import Blog from "../../models/blogModel.js";

export const updateBlog = async (req, res) => {
  const { id } = req.params;
  const updatedBlog = await Blog.findOneAndUpdate(id);
  res.status(200).json(updatedBlog);
};

/*
  const updateBlog = Blog.update(id, req.body);
  if (!updateBlog) {
    return res.status(404).json({ message: "Blog not found" });
  }
*/
