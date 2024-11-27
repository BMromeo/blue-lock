import mongoose, { Schema } from "mongoose";
import moongosePaginate from "mongoose-paginate-v2";
import Author from "./authorModel.js";

const BlogSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
  createdDate: { type: Date, default: () => Date.now() },
  description: { type: String },
  title: { type: String, required: true },
  image: { type: Buffer },
  imageType: { type: String },
});

BlogSchema.post("save", async (doc) => {
  await Author.findByIdAndUpdate(doc.author, { $inc: { blogsCount: 1 } });
});

BlogSchema.post("findOneAndDelete", async (doc) => {
  if (doc.author) {
    await Author.findByIdAndUpdate(doc.author, { $inc: { blogsCount: -1 } });
  }
});

BlogSchema.plugin(moongosePaginate);

const Blog = mongoose.model("Blog", BlogSchema);

export default Blog;
