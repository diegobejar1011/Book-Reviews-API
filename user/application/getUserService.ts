import { DataRepository } from "../domain/repositories/DataRepository";

export class GetUserService{
    constructor(private readonly dataRepository: DataRepository){}
    async execute(email: string) {
        try {
            const user = await this.dataRepository.getUser(email);

            return user;
        } catch (error: any) {
            throw new Error(error)
        }
    }
}