import { DataRepository } from "../domain/repositories/DataRepository";

export class GetUserService{
    constructor(private readonly dataRepository: DataRepository){}
    async execute(email: string) {
        try {
            const user = await this.dataRepository.getUser(email);

            if(!user) {
                return {
                    message: "Usuario no encontrado",
                    user: false
                };
            }

            return {
                message: "Usuario encontrado",
                user: user
            };
        } catch (error: any) {
            throw new Error(error)
        }
    }
}