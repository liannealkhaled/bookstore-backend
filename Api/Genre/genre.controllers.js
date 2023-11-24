const Genre = require("../../models/Genre");

exports.getAllGenre = async (req, res, next) => {
  const genres = await Genre.find();
  // .populate({path: ,select: })
  return res.status(201).json(genres);
};

exports.addGenre = async (req, res, next) => {
  try {
    // if (req.file) {
    //   req.body.image = req.file.path.replace("\\", "/");
    // }
    const newGenre = await Genre.create(req.body);
    return res.status(201).json(newGenre);
  } catch (error) {
    next(error);
  }
};
