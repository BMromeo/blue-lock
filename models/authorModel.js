import mongoose, { Schema } from "mongoose";

const AuthorSchema = new Schema({
  name: { type: String, minlength: 2, maxlength: 30, required: true },
  email: { type: String, unique: true, required: true },
  blogsCount: { type: Number, default: 0 },
  birthDate: { type: Date, required: true },
  createdDate: { type: Date, default: () => new Date.now() },
});

const Author = mongoose.model("Author", AuthorSchema);

export default Author;
