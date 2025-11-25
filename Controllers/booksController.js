// Logic

import books from "../Models/booksModel.js";
import { validationResult } from "express-validator";

const getAllBooks = (req, res) => {
  try {
    if (books.length === 0) {
      return res.status(404).json({ msg: "Books Not Found!" });
    }
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBook = (req, res) => {
  const bookId = parseInt(req.params.bookId);
  try {
    const existingBook = books.find((book) => book.id === bookId);
    if (!existingBook) {
      return res.status(404).json({ msg: `Book with id ${bookId} Not Found!` });
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
      return res.status(400).json(errors.array());
    }
    books.push(newBook);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateBook = (req, res) => {
  const bookId = parseInt(req.params.bookId);
  try {
    const existingBook = books.find((book) => book.id === bookId);
    if (!existingBook) {
      return res.status(404).json({ msg: `Book with id ${bookId} Not Found!` });
    }
    existingBook.title = req.body.title;
    existingBook.author = req.body.author;
    res.status(200).json({ msg: "Book Updated Successfully! " });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteBook = (req, res) => {
  const bookId = parseInt(req.params.bookId);
  try {
    const bookIndex = books.findIndex((book) => book.id === bookId);
    if (bookIndex === -1) {
      return res.status(404).json({ msg: `Book with id ${bookId} Not Found!` });
    }
    books.splice(bookIndex, 1);
    res.status(200).json({ msg: "Book deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getAllBooks, getBook, createBook, updateBook, deleteBook };
