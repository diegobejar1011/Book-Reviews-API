import { getReviewsByUserController, postReviewController } from "./reviewDependencies";
import { Router } from "express";
import { verifyTokenService } from "../../auth/infraestructure/authDependencies";

export const reviewRouter = Router();

reviewRouter.get("/:id", verifyTokenService.execute.bind(verifyTokenService), getReviewsByUserController.execute.bind(getReviewsByUserController));
reviewRouter.post("/:id", verifyTokenService.execute.bind(verifyTokenService), postReviewController.execute.bind(postReviewController));