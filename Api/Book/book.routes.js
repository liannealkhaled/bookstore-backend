const express = require("express");
const { getAllBooks, addBook } = require("./book.controllers");
const passport = require("passport");
const upload = require("../../middlewares/multer");

const bookrouter = express.Router();

bookrouter.get("/allbooks", getAllBooks);
bookrouter.post(
  "/book",
  passport.authenticate("jwt", { session: false }),
  upload.single("bookimage"),
  addBook
);
module.exports = bookrouter;
