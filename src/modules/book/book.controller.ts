import { Request, Response } from "express";

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

export const bookController = {
  getAllBook,
};
