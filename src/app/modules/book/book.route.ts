import express from 'express';
import { BookController } from './book.controller';

const router = express.Router();

// Create Cow
router.post('/create-book', BookController.createBook);

// Get All cows
router.get(
  '/all-books',
  // auth(ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.BUYER, ENUM_USER_ROLE.ADMIN),
  BookController.getAllBooks
);

// Get single cow
router.get(
  '/:id',
  // auth(ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.BUYER, ENUM_USER_ROLE.ADMIN),
  BookController.getSingleBook
);

// // Delete an cow
// router.delete('/:id', auth(ENUM_USER_ROLE.SELLER), CowController.deleteCow);

// // Update a cow
// router.patch(
//   '/:id',
//   validateRequest(CowValidation.updateCowZodSchema),
//   auth(ENUM_USER_ROLE.SELLER),
//   CowController.updateCow
// );

export const BookRoutes = router;
