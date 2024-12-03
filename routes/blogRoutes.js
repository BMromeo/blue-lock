import { Router } from "express";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
} from "../controllers/blogs/index.js";
import { authorize, protect } from "../middlewares/authMiddleware.js";
import compressionMiddleware from "../middlewares/compressionMiddleware.js";
import { createBlogValidation } from "../validators/blogValidators.js";
import validationMiddleware from "../middlewares/validationMiddleware.js";

const router = Router();

router.get("/", protect, compressionMiddleware, getAllBlogs);
router.get("/:id", protect, getBlogById);
router.post(
  "/",
  protect,
  authorize("admin"),
  createBlogValidation,
  validationMiddleware,
  createBlog
);
router.put("/:id", protect, authorize("admin"), updateBlog);
router.delete("/:id", protect, authorize("admin"), deleteBlog);

export default router;
