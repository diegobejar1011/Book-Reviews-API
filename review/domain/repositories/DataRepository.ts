import { ReviewReq, ReviewRes } from "../entities";

export interface DataRepository {
    getReviewsByUser(id_user: number): Promise<ReviewRes[]>
    postReview(id_use: number, review: ReviewReq): Promise<Number>
}