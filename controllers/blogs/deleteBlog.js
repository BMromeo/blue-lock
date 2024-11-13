import Blog from "../../models/blogModel.js";

export const deleteBlog = async (req, res) => {
  const { id } = req.params;
  await Blog.findByIdAndDelete(id);
  res.status(204).json({ message: "Blog deleted" });
};

/*
  const deletedBlog = Blog.delete(id2);
  if (!deletedBlog) {
    return res.status(404).json({ message: "Blog not found" });
  }
*/
