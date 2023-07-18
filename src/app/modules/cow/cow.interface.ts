import { Model, Types } from 'mongoose';
import { IUser } from '../user/user.interface';

export type ILocation =
  | 'Dhaka'
  | 'Chattogram'
  | 'Barishal'
  | 'Rajshahi'
  | 'Sylhet'
  | 'Comilla'
  | 'Rangpur'
  | 'Mymensingh';

export type ICategory = 'Dairy' | 'Beef' | 'Dual Purpose';

export type ICow = {
  name: string;
  age: number;
  price: number;
  location: ILocation;
  breed: string;
  weight: number;
  label: 'for sale' | 'sold out';
  category: ICategory;
  seller: Types.ObjectId | IUser;
};

export type CowModel = Model<ICow, Record<string, number>>;

export type ICowFilters = {
  searchTerm?: string;
  minPrice?: string;
  maxPrice?: string;
  location?: string;
  breed?: string;
  category?: string;
};
