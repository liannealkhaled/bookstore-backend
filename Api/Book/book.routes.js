const express = require("express");
const { getAllBooks } = require("./book.controllers");

const bookrouter = express.Router();

bookrouter.get("/", getAllBooks);

module.exports = bookrouter;
