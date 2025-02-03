"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTokenService = void 0;
class CreateTokenService {
    constructor(authRepository) {
        this.authRepository = authRepository;
    }
    execute(user) {
        try {
            const token = this.authRepository.createToken(user);
            return token;
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.CreateTokenService = CreateTokenService;
