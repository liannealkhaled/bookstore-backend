const express = require("express");
const { getAllGenre, addGenre } = require("./genre.controllers");
const passport = require("passport");

const genrerouter = express.Router();

genrerouter.get("/allgenre", getAllGenre);
genrerouter.post(
  "/addGenre",
  passport.authenticate("jwt", { session: false }),
  addGenre
);

module.exports = genrerouter;
