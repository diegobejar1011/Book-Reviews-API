import { reviewRouter } from "../review/infraestructure/reviewRouter";
import { Router } from "express";

export const indexRouter = Router()

indexRouter.use("/review", reviewRouter)