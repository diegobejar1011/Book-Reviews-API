import { UserRes } from "../../../user/domain/entities";
import { AuthRepository } from "../../domain/repositories/AuthRepository";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../../domain/constants/SecretKey";

export class JWTRepository implements AuthRepository {
    createToken(data: UserRes, ): string {
        try {
            const token = jwt.sign(data, JWT_SECRET_KEY, { expiresIn: "1h"});

            return token;
        } catch (error: any) {
            throw new Error(error);
        }
    }

    verifyToken(token: string): void {
        jwt.verify(token, JWT_SECRET_KEY, (err: any, _decodeToken) => {
            if(err){
                throw new Error(err.message);
            }
        });
    }
}