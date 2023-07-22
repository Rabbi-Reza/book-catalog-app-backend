"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const book_controller_1 = require("./book.controller");
const book_validation_1 = require("./book.validation");
const router = express_1.default.Router();
router.post('/add-book', (0, validateRequest_1.default)(book_validation_1.BookValidation.createBookZodSchema), book_controller_1.BookController.createBook);
router.get('/recently-added-books', book_controller_1.BookController.getRecentlyAddedBooks);
router.get('/books', book_controller_1.BookController.getAllBooks);
router.get('/book/:id', book_controller_1.BookController.getSingleBook);
router.patch('/edit-book/:id', (0, validateRequest_1.default)(book_validation_1.BookValidation.updateBookZodSchema), book_controller_1.BookController.updateBook);
router.delete('/delete-book/:id', book_controller_1.BookController.deleteBook);
router.get('/books/search', book_controller_1.BookController.getSearchResult);
router.post('/review/:id', book_controller_1.BookController.addReviewToBook);
router.get('/review/:id', book_controller_1.BookController.getReviewFromBook);
exports.BookRoutes = router;