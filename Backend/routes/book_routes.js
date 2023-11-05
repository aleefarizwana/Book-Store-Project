const express=require("express");
const router = express.Router();
const book = require("../model/book");
const cart = require("../model/CartList");
const booksController = require("../controllers/books_controller")

router.get('/', booksController.getAllBooks);
router.post('/',booksController.addBook);
router.get('/:bId',booksController.getById);
router.put('/:bId',booksController.updateBook);
router.delete('/:bId',booksController.deleteBook);

module.exports = router;