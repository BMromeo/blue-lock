// import { v4 as uuid4 } from "uuid";
import Blog from "../../models/blogModel.js";

export const createBlog = async (req, res) => {
  const { author, title, description, date } = req.body;

  if (!author || !title || !description || !date) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const newBlog = await Blog.create(req.body);

  res.status(201).json(newBlog);
};

/*
  const newBlog = {
    id: uuid4(),
    author,
    date,
    description,
    title,
  };

  Blog.create(newBlog);

*/
