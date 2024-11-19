import { Router } from "express";
import { getAllAuthors } from "../controllers/authors/getAllAuthors.js";
import { createAuthor } from "../controllers/authors/createAuthor.js";
import { deleteAuthor } from "../controllers/authors/deleteAuthor.js";

const router = Router();

router.get("/", getAllAuthors);
router.post("/", createAuthor);
router.delete("/:id", deleteAuthor);

export default router;
