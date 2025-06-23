import { ErrorRequestHandler, RequestHandler } from "express";
import config from "../config";
import mongoose from "mongoose";

export const notFoundHandler: RequestHandler = (req, res, next) => {
  res.status(200).json({
    success: false,
    message: `🔍 Not Found: ${req.originalUrl}`,
  });
};

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Something Went Wrong";

  console.log("🔥 Error caught by global handler");
  console.log("Error name:", err.name);

  //   if (err instanceof mongoose.Error.ValidationError) {
  //     statusCode = 400;
  //     const errors = Object.values(err.errors).map((e: any) => e.message);
  //     message = `Validation Error: ${errors.join(", ")}`;
  //   }

  res.status(statusCode).json({
    success: false,
    message,
    stack: config.environment === "development" ? err.stack : undefined,
  });
};
