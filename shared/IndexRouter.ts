import { reviewRouter } from "../review/infraestructure/reviewRouter";
import { userRouter } from "../user/infraestructure/userRouter";
import { Router } from "express";

export const indexRouter = Router();

indexRouter.use("/review", reviewRouter);
indexRouter.use("/user", userRouter);