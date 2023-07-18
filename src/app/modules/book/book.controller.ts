import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { IBook } from './book.interface';
import { BookService } from './book.service';

const createBook: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...bookData } = req.body;
    const result = await BookService.createBook(bookData);

    sendResponse<IBook>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Book created successfully',
      data: result,
    });
  }
);

const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  // const paginationOptions = pick(req.query, paginationFields);
  // const filters = pick(req.query, cowFilterableFields);

  const result = await BookService.getAllBooks();

  sendResponse<IBook[]>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Cows retrieved successfully',
    // meta: result.meta,
    data: result.data,
  });
});

const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await BookService.getSingleBook(id);

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cow retrieved successfully',
    data: result,
  });
});

// const updateCow = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const updatedData = req.body;
//   const token = req.headers.authorization;
//   if (!token) {
//     throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
//   }

//   const result = await CowService.updateCow(token, id, updatedData);

//   sendResponse<ICow>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Cow updated successfully',
//     data: result,
//   });
// });

// const deleteCow = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const token = req.headers.authorization;
//   if (!token) {
//     throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
//   }

//   const result = await CowService.deleteCow(token, id);

//   sendResponse<ICow>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Cow deleted successfully',
//     data: result,
//   });
// });

export const BookController = {
  createBook,
  getAllBooks,
  getSingleBook
  // getAllCows,
  // getSingleCow,
  // updateCow,
  // deleteCow,
};
