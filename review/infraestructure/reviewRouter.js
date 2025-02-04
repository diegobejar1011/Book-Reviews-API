"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewRouter = void 0;
const reviewDependencies_1 = require("./reviewDependencies");
const express_1 = require("express");
const authDependencies_1 = require("../../auth/infraestructure/authDependencies");
exports.reviewRouter = (0, express_1.Router)();
exports.reviewRouter.get("/:id", authDependencies_1.verifyTokenService.execute.bind(authDependencies_1.verifyTokenService), reviewDependencies_1.getReviewsByUserController.execute.bind(reviewDependencies_1.getReviewsByUserController));
exports.reviewRouter.post("/:id", authDependencies_1.verifyTokenService.execute.bind(authDependencies_1.verifyTokenService), reviewDependencies_1.postReviewController.execute.bind(reviewDependencies_1.postReviewController));
