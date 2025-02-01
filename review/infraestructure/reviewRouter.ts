import { getReviewsByUserController, postReviewController } from "./reviewDependencies";
import { Router } from "express";

export const reviewRouter = Router();

reviewRouter.get("/:id", getReviewsByUserController.execute.bind(getReviewsByUserController));
reviewRouter.post("/", postReviewController.execute.bind(postReviewController));