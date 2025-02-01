// Technology
import { DataRepositorySQL } from "./adapters/msyql/DataRepositorySQL";
import { BcrypRepository } from "./adapters/bcrypt/bcryptRepository";
// Services
import { CreateUserService, GetUserService } from "../application";
// Controllers
import { CreateUserController, GetUserController } from "./controllers";

const dataRepositorySQL = new DataRepositorySQL();
const bcryptRepository = new BcrypRepository();

const createUserService = new CreateUserService(dataRepositorySQL, bcryptRepository);
const getUserService = new GetUserService(dataRepositorySQL);

export const createUserController = new CreateUserController(createUserService);
export const getUserController = new GetUserController(getUserService);