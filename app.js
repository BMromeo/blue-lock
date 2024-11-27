import express from "express";
import blogRouter from "./routes/blogRoutes.js";
import authorRouter from "./routes/authorRoutes.js";
import authRouter from "./routes/authRoutes.js";
import cors from "cors";
import fileUpload from "express-fileupload";

const app = express();

// const corsOptions = {
//     origin: '',
//     methods: ['GET', 'POST']
// };

app.use(cors());

app.use(express.json());

app.use(
  fileUpload({
    limits: { fileSize: 1 * 1024 * 1024 }, // 1MB
    abortOnLimit: true,
  })
);

app.use("/api/blogs", blogRouter);
app.use("/api/authors", authorRouter);
app.use("/api/auth", authRouter);

export default app;
