import mongoose, { Schema } from "mongoose";
import Author from "./authorModel.js";

const BlogSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
  date: { type: Date, default: () => Date.now() },
  description: { type: String },
  title: { type: String, required: true },
});

BlogSchema.post("save", async (doc) => {
  await Author.findByIdAndUpdate(doc.author, { $inc: { blogsCount: 1 } });
});

// TODO: fix
BlogSchema.post("delete", async (doc) => {
  await Author.findByIdAndUpdate(doc.author, { $inc: { blogsCount: -1 } });
});

const Blog = mongoose.model("Blog", BlogSchema);

export default Blog;
