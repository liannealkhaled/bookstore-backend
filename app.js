const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./database");
const bookrouter = require("./Api/Book/book.routes");
const genrerouter = require("./Api/Genre/genre.routes");
const authorrouter = require("./Api/Author/author.routes");
const passport = require("passport");
const { localStrategy, jWTStrategy } = require("./middlewares/passport");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
app.get("/", (req, res) => {
  res.send("you are connected");
});

connectDB();

app.use("/Assets", express.static(path.join(__dirname, "Assets")));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(passport.initialize());
passport.use("local", localStrategy);
passport.use("jwt", jWTStrategy);
app.use("/api", bookrouter);
app.use("/api", genrerouter);
app.use("/api", authorrouter);

app.listen(8000, () => {
  console.log(`App is running on port: 8000`);
});
