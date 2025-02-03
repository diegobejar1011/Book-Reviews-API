import { CreateTokenService } from "../../auth/application";
import { DataRepository } from "../domain/repositories/DataRepository";
import { EncryptRepository } from "../domain/repositories/EncryptReposirty";

export class ValidateUserService{
    constructor(private readonly encryptRepository: EncryptRepository, private readonly dataRepository: DataRepository, private readonly createTokenService: CreateTokenService) {}
    async execute(email: string, password: string){
        try {
            let validate = true;

            const user = await this.dataRepository.getUser(email);

            if(!user) {
                return {
                    message: "Usuario no encontrado",
                    validate: false
                };
            }

            if(user.email === email){
                validate = await this.encryptRepository.decodePassword(password, user.password);
            }

            let token = null;

            if(validate){
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
            
        } catch (error: any) {
            throw new Error(error)
        }
    }
}