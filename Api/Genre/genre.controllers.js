const Genre = require("../../models/Genre");

exports.getAllGenre = async (req, res, next) => {
  try {
    const genres = await Genre.find();
    // .populate({path: ,select: })
    return res.status(201).json(genres);
  } catch (error) {
    next(error);
  }
};

exports.addGenre = async (req, res, next) => {
  try {
    const newGenre = await Genre.create(req.body);
    return res.status(201).json(newGenre);
  } catch (error) {
    next(error);
  }
};
