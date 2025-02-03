"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTRepository = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SecretKey_1 = require("../../domain/constants/SecretKey");
class JWTRepository {
    createToken(data) {
        try {
            const token = jsonwebtoken_1.default.sign(data, SecretKey_1.JWT_SECRET_KEY, { expiresIn: "1h" });
            return token;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    verifyToken(token) {
        jsonwebtoken_1.default.verify(token, SecretKey_1.JWT_SECRET_KEY, (err, _decodeToken) => {
            if (err) {
                throw new Error(err.message);
            }
        });
    }
}
exports.JWTRepository = JWTRepository;
