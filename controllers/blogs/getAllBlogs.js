import Blog from "../../models/blogModel.js";

const validSortFields = ["createdDate", "title", "description"];

export const getAllBlogs = async (req, res) => {
  const {
    page,
    pageSize,
    title,
    sortBy = "createdDate",
    order = "desc",
  } = req.query;

  if (!validSortFields.includes(sortBy)) {
    return res.status(400).json({ message: "Invalid sort field." });
  }

  const filters = {};
  if (title) {
    filters.title = { $regex: title, $options: "i" };
  }

  const options = {
    page: parseInt(page, 10),
    limit: parseInt(pageSize, 10),
    sort: { [sortBy]: order === "desc" ? -1 : 1 },
    populate: {
      path: "author",
      select: "name email",
    },
  };

  const blogs = await Blog.paginate(filters, options);

  res.status(200).json(blogs);
};
