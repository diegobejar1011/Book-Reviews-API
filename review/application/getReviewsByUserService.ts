import { DataRepository } from "../domain/repositories/DataRepository";

export class GetReviewsByUserService {
    constructor(private readonly dataRespository: DataRepository){}
    async execute(id_user: number){
        try {
            const reviews = await this.dataRespository.getReviewsByUser(id_user);

            return reviews;
        } catch (error: any) {
            throw new Error(error);
        }
    }
}