import { ReviewReq } from "../domain/entities";
import { DataRepository } from "../domain/repositories/DataRepository";

export class PostReviewService {
    constructor(private readonly dataRepository: DataRepository){}
    async execute(review: ReviewReq) {
        try {
            const id = await this.dataRepository.postReview(review);

            return id;
        } catch (error: any) {
            throw new Error(error);
        }
    }
}