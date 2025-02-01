import { UserRes } from "../../../user/domain/entities";

export interface AuthRepository {
    createToken(data: UserRes): string;
    verifyToken(token: string): void;
}