/* eslint-disable no-undef */
import mongoose from "mongoose";
import app from "./app.js";
import env from "dotenv";

env.config();

const PORT = process.env.PORT;

mongoose
  .connect("mongodb://localhost:27017/blog_db")
  .then(() => console.log("Base de datos conectada"))
  .catch((error) => console.log(error));

app.listen(PORT, () => console.log("Servidor funcionando."));
