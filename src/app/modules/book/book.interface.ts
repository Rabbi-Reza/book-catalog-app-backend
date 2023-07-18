import { Model } from "mongoose";

export type IBook = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews?: string[];
  uploader: string;
};

export type BookModel = Model<IBook, Record<string, number>>;