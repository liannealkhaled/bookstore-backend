const express = require("express");
const passport = require("passport");
const { register, signin, getAllAuthors } = require("./author.controllers");
const upload = require("../../middlewares/multer");

const authorrouter = express.Router();

authorrouter.post("/register", upload.single("image"), register);
authorrouter.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  signin
);
authorrouter.get("/authors", getAllAuthors);
module.exports = authorrouter;
