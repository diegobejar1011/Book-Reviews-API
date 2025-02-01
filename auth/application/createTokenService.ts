import { UserRes } from "../../user/domain/entities";
import { AuthRepository } from "../domain/repositories/AuthRepository";

export class CreateTokenService{
    constructor(private readonly authRepository: AuthRepository) {}
    execute(user: UserRes){
        try {
            const token = this.authRepository.createToken(user);

            return token;
        } catch (error: any) {
            throw new Error(error);
        }
    }
}