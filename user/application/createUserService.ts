import { DataRepository } from "../domain/repositories/DataRepository";
import { UserReq } from "../domain/entities";
import { EncryptRepository } from "../domain/repositories/EncryptReposirty";

export class CreateUserService{
    constructor(private readonly dataRepository: DataRepository, private readonly encryptRepository: EncryptRepository){}
    async execute(user: UserReq){
        try {

            if(user.email == "" || user.password == "" || user.username == "") {
                return {
                    message: "Hace falta campos por llenar"
                };
            }
            const hash = await this.encryptRepository.encodePassword(user.password);

            user.password = hash;

            const id = await this.dataRepository.createUser(user);

            return {
                id: id,
                username: user.username,
                email: user.email
            };
            
        } catch (error: any) {
            throw new Error(error);
        }
    }
}