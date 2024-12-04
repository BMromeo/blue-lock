import Blog from "../../models/blogModel.js";

const validSortFields = ["createdDate", "title", "description"];

export const getAllBlogs = async (req, res) => {
  try {
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

    res.status(200).json({
      data: blogs.docs,
      meta: {
        currentPage: blogs.page,
        totalPages: blogs.totalPages,
        totalDocuments: blogs.totalDocs,
        limit: blogs.limit,
        hasNextPage: blogs.hasNextPage,
        hasPrevPage: blogs.hasPrevPage,
      },
    });
  } catch (error) {
    console.error("Error obtaining blogs:", error);
    res
      .status(500)
      .json({ message: "Error obtaining blogs", error: error.message });
  }
};
