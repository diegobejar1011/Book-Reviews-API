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
exports.GetUserService = void 0;
class GetUserService {
    constructor(dataRepository) {
        this.dataRepository = dataRepository;
    }
    execute(emailReq) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.dataRepository.getUser(emailReq);
                if (!user) {
                    return {
                        message: "Usuario no encontrado",
                        user: false
                    };
                }
                const { username, email } = user;
                return {
                    message: "Usuario encontrado",
                    user: {
                        username: username,
                        email: email
                    }
                };
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.GetUserService = GetUserService;
