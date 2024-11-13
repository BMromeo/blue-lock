import mongoose, { Schema } from "mongoose";

const BlogSchema = new Schema({
  author: { type: String, required: true, minlength: 3 },
  date: { type: Date, default: () => Date.now() },
  description: { type: String },
  title: { type: String, required: true },
});

const Blog = mongoose.model("Blog", BlogSchema);

export default Blog;

/*
let blogs = [];

const Blog = {
  getAll: () => blogs,
  getById: (id) => blogs.find((blog) => blog.id === id),
  create: (newBlog) => {
    blogs.push(newBlog);
    return newBlog;
  },
  update: (id, updatedBlog) => {
    const index = blogs.findIndex((blog) => blog.id === id);
    if (index !== -1) {
      blogs[index] = { ...blogs[index], ...updatedBlog };
      console.log(blogs[index]);
      return blogs[index];
    }
  },
  delete: (id) => {
    const index = blogs.findIndex((blog) => blog.id === id);
    if (index !== -1) {
      const deletedBlog = blogs.splice(index, 1);
      console.log({ deletedBlog });
      return deletedBlog[0];
    }
  },
};
*/
