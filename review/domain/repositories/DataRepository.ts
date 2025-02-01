import { ReviewReq, ReviewRes } from "../entities";

export interface DataRepository {
    getReviewsByUser(id_user: number): Promise<ReviewRes[]>
    postReview(review: ReviewReq): Promise<Number>
}