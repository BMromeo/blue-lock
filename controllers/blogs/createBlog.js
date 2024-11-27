import Blog from "../../models/blogModel.js";

export const createBlog = async (req, res) => {
  try {
    const { author, title, description, createdDate } = req.body;

    const image = req?.files?.image;

    if (!author || !title || !description || !createdDate) {
      return res.status(400).json({ message: "All fields are required." });
    }

    if (!image?.mimetype?.startsWith("/image")) {
      return res.status(400).json({ message: "File must be an image." });
    }

    const newBlog = new Blog({
      title,
      description,
      createdDate,
      author,
      image: image.data,
      imageType: image.mimetype,
    });

    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error server" });
  }
};
