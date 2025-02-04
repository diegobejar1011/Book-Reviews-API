"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserService = void 0;
class CreateUserService {
    constructor(dataRepository, encryptRepository) {
        this.dataRepository = dataRepository;
        this.encryptRepository = encryptRepository;
    }
    execute(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (user.email == "" || user.password == "" || user.username == "") {
                    return {
                        message: "Hace falta campos por llenar"
                    };
                }
                const hash = yield this.encryptRepository.encodePassword(user.password);
                user.password = hash;
                const id = yield this.dataRepository.createUser(user);
                return {
                    id: id,
                    username: user.username,
                    email: user.email
                };
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.CreateUserService = CreateUserService;
