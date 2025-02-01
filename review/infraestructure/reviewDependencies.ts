// Services
import { GetReviewsByUserService, PostReviewService } from "../application";
// Controllers
import { GetReviewsByUserController, PostReviewController } from "./controllers";
// Repositories 
import { DataRepositorySQL } from "./adapters/mysql/DataRepositorySQL";

const dataRepositorySQL = new DataRepositorySQL();

const getReviewsByUserService = new GetReviewsByUserService(dataRepositorySQL);
const postReviewService = new PostReviewService(dataRepositorySQL);

export const getReviewsByUserController = new GetReviewsByUserController(getReviewsByUserService);
export const postReviewController = new PostReviewController(postReviewService);
