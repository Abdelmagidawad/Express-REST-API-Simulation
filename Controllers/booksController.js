// Logic

import books from "../Models/booksModel.js";
import { validationResult } from "express-validator";

const getAllBooks = (req, res, next) => {
  try {
    if (books.length === 0) {
      const error = new Error("Books Not Found!");
      error.status = 404;
      return next(error);
    }
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBook = (req, res, next) => {
  const bookId = parseInt(req.params.bookId);
  try {
    const existingBook = books.find((book) => book.id === bookId);
    if (!existingBook) {
      const error = new Error(`Book with id ${bookId} Not Found!`);
      error.status = 404;
      return next(error);
    }
    res.status(200).json(existingBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createBook = (req, res) => {
  try {
    const newBook = { id: books.length + 1, ...req.body };
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array().map((err) => err.msg),
      });
    }
    books.push(newBook);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateBook = (req, res, next) => {
  const bookId = parseInt(req.params.bookId);
  try {
    const existingBook = books.find((book) => book.id === bookId);
    if (!existingBook) {
      const error = new Error(`Book with id ${bookId} Not Found!`);
      error.status = 404;
      return next(error);
    }
    existingBook.title = req.body.title;
    existingBook.author = req.body.author;
    res.status(200).json({ msg: "Book Updated Successfully! " });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteBook = (req, res, next) => {
  const bookId = parseInt(req.params.bookId);
  try {
    const bookIndex = books.findIndex((book) => book.id === bookId);
    if (bookIndex === -1) {
      const error = new Error(`Book with id ${bookId} Not Found!`);
      error.status = 404;
      return next(error);
    }
    books.splice(bookIndex, 1);
    res.status(200).json({ msg: "Book deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getAllBooks, getBook, createBook, updateBook, deleteBook };
