"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexRouter = void 0;
const reviewRouter_1 = require("../review/infraestructure/reviewRouter");
const userRouter_1 = require("../user/infraestructure/userRouter");
const express_1 = require("express");
exports.indexRouter = (0, express_1.Router)();
exports.indexRouter.use("/review", reviewRouter_1.reviewRouter);
exports.indexRouter.use("/user", userRouter_1.userRouter);
