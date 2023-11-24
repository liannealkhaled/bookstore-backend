const { json } = require("express");
const Author = require("../../models/Author");
const Book = require("../../models/Book");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const hashedPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};

const generateToken = (author) => {
  const payload = {
    id: author._id,
    username: author.username,
  };
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "5hr",
  });
};

exports.register = async (req, res, next) => {
  try {
    const mypassword = await hashedPassword(req.body.password);
    req.body.password = mypassword;
    // upload photo missing
    if (req.file) {
      req.body.image = req.file.path;
    }
    const newAuthor = await Author.create(req.body);
    const token = generateToken(newAuthor);
    return res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

exports.signin = async (req, res, next) => {
  try {
    const token = generateToken(req.user);
    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

exports.getAllAuthors = async (req, res) => {
  const authors = await Author.find();
  return res.status(201).json(authors);
};
