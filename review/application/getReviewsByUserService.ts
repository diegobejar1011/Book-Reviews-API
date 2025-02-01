import { DataRepository } from "../domain/repositories/DataRepository";

export class GetReviewsByUserService {
    constructor(private readonly dataRespository: DataRepository){}
    async execute(id_user: number){
        try {
            const reviews = await this.dataRespository.getReviewsByUser(id_user);

            if(reviews.length == 0){
                return {
                    message: "No hay notas del usuario",
                    reviews: false
                }
            }

            return {
                message: "Reseñas encontradas",
                reviews: reviews
            };
        } catch (error: any) {
            throw new Error(error);
        }
    }
}