import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { CowController } from './cow.controller';
import { CowValidation } from './cow.validation';

const router = express.Router();

// Create Cow
router.post('/', auth(ENUM_USER_ROLE.SELLER), BookController.createCow);

// // Get All cows
// router.get(
//   '/',
//   auth(ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.BUYER, ENUM_USER_ROLE.ADMIN),
//   CowController.getAllCows
// );

// // Get single cow
// router.get(
//   '/:id',
//   auth(ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.BUYER, ENUM_USER_ROLE.ADMIN),
//   CowController.getSingleCow
// );

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
