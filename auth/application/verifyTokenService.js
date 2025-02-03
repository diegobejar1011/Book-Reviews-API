"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyTokenService = void 0;
class VerifyTokenService {
    constructor(authRepository) {
        this.authRepository = authRepository;
    }
    execute(req, res, next) {
        try {
            let token = req.get("Authorization");
            if (token) {
                this.authRepository.verifyToken(token);
                next();
            }
            else {
                res.status(400).json({
                    message: "No ha proporcionado un token"
                });
            }
        }
        catch (error) {
            res.status(500).json({
                message: "Token invalido",
                error: error.message
            });
        }
    }
}
exports.VerifyTokenService = VerifyTokenService;
