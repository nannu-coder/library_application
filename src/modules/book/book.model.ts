import { model, Schema } from "mongoose";
import IBook from "./book.interface";

const bookSchema = new Schema<IBook>({
  title: {
    type: String,
    required: [true, "title must be provided"],
    trim: true,
  },
  author: {
    type: String,
    required: [true, "Author must be provided"],
  },
  genre: {
    enum: [
      "FICTION",
      "NON_FICTION",
      "SCIENCE",
      "HISTORY",
      "BIOGRAPHY",
      "FANTASY",
    ],
    required: [true, "genre must be provided"],
  },
  isbn: {
    type: String,
    required: [true, "isbn must be provided"],
  },
  description: {
    type: String,
  },
  copies: {
    type: Number,
    required: [true, "copies must be provided"],
  },
  available: {
    type: Boolean,
    required: true,
  },
});

export const Book = model<IBook>("book", bookSchema);
