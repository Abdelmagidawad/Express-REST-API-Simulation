import { body } from "express-validator";

export const validationSchema = () => {
  return [
    body("title").notEmpty().withMessage("title is required!"),
    body("author").notEmpty().withMessage("author is required! "),
  ];
};
