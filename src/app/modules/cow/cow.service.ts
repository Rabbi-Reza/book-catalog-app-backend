import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import { SortOrder } from 'mongoose';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { User } from '../user/user.model';
import { cowSearchableFields } from './cow.constant';
import { ICow, ICowFilters } from './cow.interface';
import { Cow } from './cow.model';

const createCow = async (cow: ICow): Promise<ICow | null> => {
  const userData = await User.findById(cow.seller);

  if (userData) {
    if (userData.role !== 'seller') {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Not a seller');
    }
  }

  // default label
  if (!cow.label) {
    cow.label = 'for sale';
  }

  const result = await Cow.create(cow);
  return result;
};

const getAllCows = async (
  filters: ICowFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<ICow[]>> => {
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const { searchTerm, minPrice, maxPrice, ...filtersData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: cowSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  if (minPrice) {
    andConditions.push({
      price: { $gte: minPrice },
    });
  }

  if (maxPrice) {
    andConditions.push({
      price: { $lte: maxPrice },
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Cow.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const count = await Cow.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      count,
    },
    data: result,
  };
};

const getSingleCow = async (id: string): Promise<ICow | null> => {
  const result = await Cow.findById(id);

  return result;
};

const updateCow = async (
  token: string,
  id: string,
  payload: Partial<ICow>
): Promise<ICow | null> => {
  // Verify token
  let verifiedUser = null;

  verifiedUser = jwtHelpers.verifiedToken(token, config.jwt.secret as Secret);

  const isExist = await Cow.findOne({ _id: id });

  // Check if user with id existed in DB
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  if (!(verifiedUser?.userId == isExist?.seller.toString())) {
    throw new ApiError(httpStatus.FORBIDDEN, 'You are not authorized');
  }

  const { ...userData } = payload;
  const updatedCowData: Partial<ICow> = { ...userData };

  const result = await Cow.findOneAndUpdate({ _id: id }, updatedCowData, {
    new: true,
  });

  return result;
};

const deleteCow = async (token: string, id: string): Promise<ICow | null> => {
  // Verify token
  let verifiedUser = null;

  verifiedUser = jwtHelpers.verifiedToken(token, config.jwt.secret as Secret);

  const isExist = await Cow.findOne({ _id: id });

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No Cow data found!');
  }

  if (!(verifiedUser?.userId == isExist?.seller.toString())) {
    throw new ApiError(httpStatus.FORBIDDEN, 'You are not authorized');
  }

  const result = await Cow.findByIdAndDelete(id);

  return result;
};

export const CowService = {
  createCow,
  getAllCows,
  getSingleCow,
  updateCow,
  deleteCow,
};
