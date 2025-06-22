import { model, Schema } from "mongoose";
import { IBorrowBook } from "./borrow.interface";

const borrowSchema = new Schema<IBorrowBook>({
  book: {
    type: Schema.Types.ObjectId,
    ref: "Book",
    required: [true, "Book Must be provided"],
  },
  quantity: {
    type: Number,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
});

export const BorrowBook = model("borrow", borrowSchema);
