import { body } from "express-validator";

export const createBlogValidation = [
  body("title")
    .notEmpty()
    .withMessage("Title is required.")
    .isLength({ min: 4, max: 30 })
    .withMessage("The title must be between 4 and 30 characters"),
  body("author")
    .notEmpty()
    .withMessage("Author is required.")
    .isMongoId()
    .withMessage("Author must be an ID"),
  body("createdDate")
    .notEmpty()
    .isISO8601()
    .withMessage("Invalid date format. Must be ISO6801"),
  body("description")
    .notEmpty()
    .isLength({ min: 15, max: 100 })
    .withMessage("Description must be between 15 and 100."),
  body("image")
    .optional()
    .custom((value, { req }) => {
      const image = req?.files?.image;
      if (!image) {
        throw new Error("Image is required.");
      }
      if (!image?.mimetype?.startsWith("/image")) {
        throw new Error("file must be an image.");
      }
    }),
];
