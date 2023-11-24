const Genre = require("../../models/Genre");
const Author = require("../../models/Author");
const Book = require("../../models/Book");

// exports.AddBook = async(req,res, next)=>{
//     try {
//        const newBook = await Book.create()

//     //    after adding, update genre and author
//     await Genre.find

//     } catch (error) {
//         next(error)
//     }
// }

exports.getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    // .populate({path: ,select: })
    return res.status(201).json(books);
  } catch (error) {
    next(error);
  }
};

exports.addBook = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.recipeimage = req.file.path.replace("\\", "/");
    }
    const newBookData = {
      ...req.body,
      author: req.author.id,
    };

    const newBook = await Book.create(newBookData);
    await Genre.findByIdAndUpdate(req.body.genre, {
      $push: { books: newBook.id },
    });
    await Author.findByIdAndUpdate(req.author.id, {
      $push: { books: newBook.id },
    });

    return res.status(201).json(newBook);
  } catch (error) {
    next(error);
  }
};
