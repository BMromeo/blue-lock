import mongoose from "mongoose";
import app from "./app.js";
import { MONGO_URI, PORT } from "./config/config.js";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Base de datos conectada"))
  .catch((error) => console.log(error));

app.listen(PORT, () => console.log("Servidor funcionando."));
