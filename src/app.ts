import express, { Request, Response } from "express";
import { bookRouter } from "./modules/book/book.routes";
import { borrowRoutes } from "./modules/borrow/borrow.routes";
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api/v1", bookRouter);
app.use("/api/v1", borrowRoutes);

export default app;
