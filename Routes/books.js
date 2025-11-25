// Routes=> endpoints

import express from "express";
import { validationSchema } from "../Middlewares/validationSchema.js";
import {
  getAllBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} from "../Controllers/booksController.js";

const router = express.Router();

// @ docs Get All books and Create a New Book
// @ route /api/books
// @ method GET ,POST

router.route("/").get(getAllBooks).post(validationSchema(), createBook);

// @ docs Get Single Book and Update Book and Delete Book
// @ route /api/books/:bookId
// @ method GET,PUT,DELETE

router.route("/:bookId").get(getBook).put(updateBook).delete(deleteBook);

export default router;
