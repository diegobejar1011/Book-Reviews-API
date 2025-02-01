// Technology
import { DataRepositorySQL } from "./adapters/msyql/DataRepositorySQL";
// Services
import { CreateUserService, GetUserService } from "../application";
// Controllers
import { CreateUserController, GetUserController } from "./controllers";

const dataRepositorySQL = new DataRepositorySQL()

const createUserService = new CreateUserService(dataRepositorySQL);
const getUserService = new GetUserService(dataRepositorySQL);

export const createUserController = new CreateUserController(createUserService);
export const getUserController = new GetUserController(getUserService);