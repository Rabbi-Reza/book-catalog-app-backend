import { IGenericResponse } from '../../../interfaces/common';
import { IBook } from './book.interface';
import { Book } from './book.model';

const createBook = async (book: IBook): Promise<IBook | null> => {
  const result = await Book.create(book);
  return result;
};

const getAllBooks = async (): Promise<IGenericResponse<IBook[]>> => {
  const result = await Book.find({});

  return {
    data: result,
  };
};

// const getAllCows = async (
//   filters: ICowFilters,
//   paginationOptions: IPaginationOptions
// ): Promise<IGenericResponse<ICow[]>> => {
//   const { page, limit, skip, sortBy, sortOrder } =
//     paginationHelpers.calculatePagination(paginationOptions);

//   const sortConditions: { [key: string]: SortOrder } = {};

//   if (sortBy && sortOrder) {
//     sortConditions[sortBy] = sortOrder;
//   }

//   const { searchTerm, minPrice, maxPrice, ...filtersData } = filters;

//   const andConditions = [];

//   if (searchTerm) {
//     andConditions.push({
//       $or: cowSearchableFields.map(field => ({
//         [field]: {
//           $regex: searchTerm,
//           $options: 'i',
//         },
//       })),
//     });
//   }

//   if (minPrice) {
//     andConditions.push({
//       price: { $gte: minPrice },
//     });
//   }

//   if (maxPrice) {
//     andConditions.push({
//       price: { $lte: maxPrice },
//     });
//   }

//   if (Object.keys(filtersData).length) {
//     andConditions.push({
//       $and: Object.entries(filtersData).map(([field, value]) => ({
//         [field]: value,
//       })),
//     });
//   }

//   const whereConditions =
//     andConditions.length > 0 ? { $and: andConditions } : {};

//   const result = await Cow.find(whereConditions)
//     .sort(sortConditions)
//     .skip(skip)
//     .limit(limit);

//   const count = await Cow.countDocuments(whereConditions);

//   return {
//     meta: {
//       page,
//       limit,
//       count,
//     },
//     data: result,
//   };
// };

const getSingleBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findById(id);

  return result;
};

// const updateCow = async (
//   token: string,
//   id: string,
//   payload: Partial<ICow>
// ): Promise<ICow | null> => {
//   // Verify token
//   let verifiedUser = null;

//   verifiedUser = jwtHelpers.verifiedToken(token, config.jwt.secret as Secret);

//   const isExist = await Cow.findOne({ _id: id });

//   // Check if user with id existed in DB
//   if (!isExist) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
//   }

//   if (!(verifiedUser?.userId == isExist?.seller.toString())) {
//     throw new ApiError(httpStatus.FORBIDDEN, 'You are not authorized');
//   }

//   const { ...userData } = payload;
//   const updatedCowData: Partial<ICow> = { ...userData };

//   const result = await Cow.findOneAndUpdate({ _id: id }, updatedCowData, {
//     new: true,
//   });

//   return result;
// };

// const deleteCow = async (token: string, id: string): Promise<ICow | null> => {
//   // Verify token
//   let verifiedUser = null;

//   verifiedUser = jwtHelpers.verifiedToken(token, config.jwt.secret as Secret);

//   const isExist = await Cow.findOne({ _id: id });

//   if (!isExist) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'No Cow data found!');
//   }

//   if (!(verifiedUser?.userId == isExist?.seller.toString())) {
//     throw new ApiError(httpStatus.FORBIDDEN, 'You are not authorized');
//   }

//   const result = await Cow.findByIdAndDelete(id);

//   return result;
// };

export const BookService = {
  createBook,
  getAllBooks,
  getSingleBook
  // getAllCows,
  // getSingleCow,
  // updateCow,
  // deleteCow,
};
