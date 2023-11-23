const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" },
  genre: { type: mongoose.Schema.Types.ObjectId, ref: "Genre" },
  image: {
    type: String,
    default:
      "https://cdn.vectorstock.com/i/1000x1000/27/29/book-store-logo-vector-21142729.webp",
  },
  description: { type: String },
});

module.exports = mongoose.model("Book", BookSchema);
