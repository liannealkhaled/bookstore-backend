const Author = require("../models/Author");
const bcrypt = require("bcrypt");

const JWTStrategy = require("passport-jwt").Strategy;
const { fromAuthHeaderAsBearerToken } = require("passport-jwt").ExtractJwt;

const LocalStrategy = require("passport-local").Strategy;

const localStrategy = new LocalStrategy(
  { usernameField: "username" },
  async (username, password, done) => {
    try {
      const author = await Author.findOne({ username: username });
      if (!author) return done({ message: "username or  password is wrong" });
      const checkpw = await bcrypt.compare(password, author.password);
      if (!checkpw) return done({ message: "username or  password is wrong" });
      return done(null, author);
    } catch (error) {
      done(error);
    }
  }
);

const jWTStrategy = new JWTStrategy(
  {
    jwtFromRequest: fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
  },
  async (payload, done) => {
    try {
      if (Date.now() / 1000 > payload.exp) return done(null, false);
      const author = await Author.findById(payload.id);
      if (!author) return done(null, false);
      return done(null, author);
    } catch (error) {
      done(error);
    }
  }
);

module.exports = { localStrategy, jWTStrategy };
