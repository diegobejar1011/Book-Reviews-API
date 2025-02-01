import { UserReq } from "../domain/entities";
import { DataRepository } from "../domain/repositories/DataRepository";
import { EncryptRepository } from "../domain/repositories/EncryptReposirty";

export class ValidateUserService{
    constructor(private readonly encryptRepository: EncryptRepository, private readonly dataRepository: DataRepository) {}
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

            return {
                message: "Usuario encontrado",
                validate: validate
            };
        } catch (error: any) {
            throw new Error(error)
        }
    }
}