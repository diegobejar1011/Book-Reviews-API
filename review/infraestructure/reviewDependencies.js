"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postReviewController = exports.getReviewsByUserController = void 0;
// Services
const application_1 = require("../application");
// Controllers
const controllers_1 = require("./controllers");
// Repositories 
const DataRepositorySQL_1 = require("./adapters/mysql/DataRepositorySQL");
const dataRepositorySQL = new DataRepositorySQL_1.DataRepositorySQL();
const getReviewsByUserService = new application_1.GetReviewsByUserService(dataRepositorySQL);
const postReviewService = new application_1.PostReviewService(dataRepositorySQL);
exports.getReviewsByUserController = new controllers_1.GetReviewsByUserController(getReviewsByUserService);
exports.postReviewController = new controllers_1.PostReviewController(postReviewService);
