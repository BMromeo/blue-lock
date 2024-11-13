import express from "express";
import blogRouter from "./routes/blogRoutes.js";
import cors from "cors";

const app = express();

// const corsOptions = {
//     origin: '',
//     methods: ['GET', 'POST']
// };

app.use(cors());

app.use(express.json());

app.use("/api/blogs", blogRouter);

export default app;
