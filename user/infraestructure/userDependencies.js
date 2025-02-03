"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserController = exports.getUserController = exports.createUserController = void 0;
// Technology
const DataRepositorySQL_1 = require("./adapters/msyql/DataRepositorySQL");
const bcryptRepository_1 = require("./adapters/bcrypt/bcryptRepository");
// Services
const application_1 = require("../application");
// Controllers
const controllers_1 = require("./controllers");
const authDependencies_1 = require("../../auth/infraestructure/authDependencies");
const dataRepositorySQL = new DataRepositorySQL_1.DataRepositorySQL();
const bcryptRepository = new bcryptRepository_1.BcrypRepository();
const createUserService = new application_1.CreateUserService(dataRepositorySQL, bcryptRepository);
const getUserService = new application_1.GetUserService(dataRepositorySQL);
const validateUserService = new application_1.ValidateUserService(bcryptRepository, dataRepositorySQL, authDependencies_1.createTokenService);
exports.createUserController = new controllers_1.CreateUserController(createUserService);
exports.getUserController = new controllers_1.GetUserController(getUserService);
exports.validateUserController = new controllers_1.ValidateUserController(validateUserService);
