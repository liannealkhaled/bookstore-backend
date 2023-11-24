const mongoose = require("mongoose");

const GenreSchema = new mongoose.Schema({
  name: { type: String, required: true },
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
});

module.exports = mongoose.model("Genre", GenreSchema);
