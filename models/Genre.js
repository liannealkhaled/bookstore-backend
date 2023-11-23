const mongoose = require("mongoose");

const GenreSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: {
    type: String,
    default:
      "https://cdn.vectorstock.com/i/1000x1000/27/29/book-store-logo-vector-21142729.webp",
  },
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
});

module.exports = mongoose.model("Genre", GenreSchema);
