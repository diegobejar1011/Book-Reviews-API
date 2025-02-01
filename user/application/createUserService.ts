import { DataRepository } from "../domain/repositories/DataRepository";
import { UserReq } from "../domain/entities";

export class CreateUserService{
    constructor(private readonly dataRepository: DataRepository){}
    async execute(user: UserReq){
        try {
            const id = this.dataRepository.createUser(user);

            return id;
        } catch (error: any) {
            throw new Error(error);
        }
    }
}