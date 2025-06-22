import { Router } from "express";
import { bookController } from "./book.controller";

const router = Router();

router.get("/", bookController.getAllBook);

export const bookRouter = router;
