import express, { Request, Response } from "express";
import { bookRouter } from "./modules/book/book.routes";
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api/v1", bookRouter);

export default app;
