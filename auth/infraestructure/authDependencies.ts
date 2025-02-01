// Technology
import { JWTRepository } from "./adapters/JWTRepository";
// Services
import { CreateTokenService, VerifyTokenService } from "../application";

const jwtRepository = new JWTRepository();

export const createTokenService = new CreateTokenService(jwtRepository);
export const verifyTokenService = new VerifyTokenService(jwtRepository);