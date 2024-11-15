import Author from "../../models/authorModel.js";

export const createAuthor = async (req, res) => {
  const { name, email, birthDate, createdDate } = req.body;

  if (!name || !email || !birthDate || !createdDate) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newAuthor = await Author.create(req.body);

  res.status(201).json(newAuthor);
};
