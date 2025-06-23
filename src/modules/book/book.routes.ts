import { Router } from "express";
import { bookController } from "./book.controller";

const router = Router();

router.get("/", bookController.getAllBook);
router.post("/create-book", bookController.createBook);

export const bookRouter = router;
