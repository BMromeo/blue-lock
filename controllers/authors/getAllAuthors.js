import Author from "../../models/authorModel.js";

export const getAllAuthors = async (_, res) => {
  const authors = await Author.find();
  if (!authors.length) {
    return res.status(404).json({ message: "Not Found." });
  }
  res.status(200).json(authors);
};
