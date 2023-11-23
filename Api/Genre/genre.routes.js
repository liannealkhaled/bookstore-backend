const express = require("express");
const { getAllGenre, addGenre } = require("./genre.controllers");

const genrerouter = express.Router();

genrerouter.get("/allgenre", getAllGenre);
genrerouter.post("/addGenre", addGenre);

module.exports = genrerouter;
