import { ReviewReq } from "../domain/entities";
import { DataRepository } from "../domain/repositories/DataRepository";

export class PostReviewService {
    constructor(private readonly dataRepository: DataRepository){}
    async execute(review: ReviewReq) {
        try {
            this.dataRepository.postReview(review);

            return true;
        } catch (error: any) {
            throw new Error(error);
        }
    }
}