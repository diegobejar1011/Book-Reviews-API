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
exports.ValidateUserService = void 0;
class ValidateUserService {
    constructor(encryptRepository, dataRepository, createTokenService) {
        this.encryptRepository = encryptRepository;
        this.dataRepository = dataRepository;
        this.createTokenService = createTokenService;
    }
    execute(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let validate = true;
                const user = yield this.dataRepository.getUser(email);
                if (!user) {
                    return {
                        message: "Usuario no encontrado",
                        validate: false
                    };
                }
                if (user.email === email) {
                    validate = yield this.encryptRepository.decodePassword(password, user.password);
                }
                let token = null;
                if (validate) {
                    token = this.createTokenService.execute({
                        id: user.id,
                        username: user.username,
                        email: user.email
                    });
                }
                return {
                    message: "Usuario encontrado",
                    validate: validate,
                    token: token,
                    id: user.id
                };
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.ValidateUserService = ValidateUserService;
