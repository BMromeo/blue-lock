import { Router } from "express";
import { getAllAuthors } from "../controllers/authors/getAllAuthors.js";
import { createAuthor } from "../controllers/authors/createAuthor.js";
import { deleteAuthor } from "../controllers/authors/deleteAuthor.js";
import { updateAuthor } from "../controllers/authors/updateAuthor.js";
import { authorize, protect } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/", protect, getAllAuthors);
router.post("/", protect, createAuthor);
router.put("/", protect, updateAuthor);
router.delete("/:id", protect, authorize("admin"), deleteAuthor);

export default router;
