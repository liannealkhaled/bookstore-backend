const express = require("express");
const { getAllBooks, addBook } = require("./book.controllers");

const bookrouter = express.Router();

bookrouter.get("/allbooks", getAllBooks);
bookrouter.post("/book", addBook);
module.exports = bookrouter;
