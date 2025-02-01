import { DataRepository } from "../domain/repositories/DataRepository";
import { UserRes } from "../domain/entities";

export class GetUserService{
    constructor(private readonly dataRepository: DataRepository){}
    async execute(emailReq: string) {
        try {

            const user = await this.dataRepository.getUser(emailReq);

            if(!user) {
                return {
                    message: "Usuario no encontrado",
                    user: false
                };
            }

            const {username, email} : UserRes = user;
            
            return {
                message: "Usuario encontrado",
                user: {
                    username: username,
                    email: email
                }
            };

        } catch (error: any) {
            throw new Error(error)
        }
    }
}