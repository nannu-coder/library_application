import { NextFunction, Request, Response } from "express";
import { errorHandler } from "../../middleware/globalErrorHandler";
import { Book } from "./book.model";

const getAllBook = async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      message: "Successfully retrived",
      status: "success",
      //data
    });
  } catch (error) {
    console.log(error);
  }
};

const createBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body;

    const result = await Book.create(data);

    res.status(200).json({
      success: true,
      message: "Book Created Successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const bookController = {
  getAllBook,
  createBook,
};
