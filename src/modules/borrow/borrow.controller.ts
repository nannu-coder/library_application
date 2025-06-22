import { Request, Response } from "express";

const getALlBorrow = async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      success: true,
      message: "successfully retrived",
    });
  } catch (error) {
    console.log(error);
  }
};

export const borrowController = {
  getALlBorrow,
};
