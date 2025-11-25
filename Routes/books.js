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

// @ docs Get All books
// @ route /api/books
// @ method GET
router.get("/", getAllBooks);

// @ docs Get Single Book
// @ route /api/books/:bookId
// @ method GET
router.get("/:bookId", getBook);

// @ docs Create a New Book
// @ route /api/books
// @ method POST
router.post("/", validationSchema(), createBook);

// @ docs Update Book
// @ route /api/books/:bookId
// @ method PUT
router.put("/:bookId", updateBook);

// @ docs Delete Book
// @ route /api/books/:bookId
// @ method DELETE
router.delete("/:bookId", deleteBook);

export default router;
