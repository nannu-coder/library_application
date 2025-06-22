import { Router } from "express";
import { borrowController } from "./borrow.controller";

const router = Router();

router.get("/borrow", borrowController.getALlBorrow);

export const borrowRoutes = router;
