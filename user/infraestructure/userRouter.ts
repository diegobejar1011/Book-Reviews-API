import { createUserController, getUserController } from "./userDependencies";
import { Router } from "express";
import { config } from "dotenv";

config();

export const userRouter = Router();

userRouter.get("/:email", getUserController.execute.bind(getUserController));
userRouter.post("/", createUserController.execute.bind(createUserController));