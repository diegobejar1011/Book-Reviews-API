import { NextFunction, Request, Response } from "express";
import { AuthRepository } from "../domain/repositories/AuthRepository";

export class VerifyTokenService {
    constructor(private readonly authRepository: AuthRepository) {}
    execute(req: Request, res: Response, next: NextFunction) {
        try {

            let token = req.get("Authorization");

            if(token){
                this.authRepository.verifyToken(token);
                next();
            }else {
                res.status(400).json({
                    message: "No ha proporcionado un token"
                });
            }
        } catch (error: any) {
            res.status(500).json({
                message: "Token invalido",
                error: error.message
            });
        }
    }
}