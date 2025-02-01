// Technology
import { DataRepositorySQL } from "./adapters/msyql/DataRepositorySQL";
import { BcrypRepository } from "./adapters/bcrypt/bcryptRepository";
// Services
import { CreateUserService, GetUserService, ValidateUserService } from "../application";
// Controllers
import { CreateUserController, GetUserController, ValidateUserController } from "./controllers";
import { createTokenService } from "../../auth/infraestructure/authDependencies";

const dataRepositorySQL = new DataRepositorySQL();
const bcryptRepository = new BcrypRepository();

const createUserService = new CreateUserService(dataRepositorySQL, bcryptRepository);
const getUserService = new GetUserService(dataRepositorySQL);
const validateUserService = new ValidateUserService(bcryptRepository, dataRepositorySQL,createTokenService);

export const createUserController = new CreateUserController(createUserService);
export const getUserController = new GetUserController(getUserService);
export const validateUserController = new ValidateUserController(validateUserService);