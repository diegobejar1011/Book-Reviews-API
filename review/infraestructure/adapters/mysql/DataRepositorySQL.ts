
import { ReviewReq, ReviewRes } from "../../../domain/entities";
import { DataRepository } from "../../../domain/repositories/DataRepository";
import { db } from "../../../../shared/mysql/application/conn";

export class DataRepositorySQL implements DataRepository {
    async postReview(id_user: number, review: ReviewReq): Promise<Number> {
        try {
            const query = "INSERT INTO review (id_user, book_title, book_author, rating, description) VALUES (?, ?, ?, ?, ?)";

            const result : any = await db.execute(query, [id_user, review.book_title, review.book_author, review.rating, review.description])

            return result[0].insertId;

        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async getReviewsByUser(id_user: number): Promise<ReviewRes[]> {
        try {
            const query = "SELECT id, id_user, book_title, book_author, rating, description FROM review WHERE id_user = ? "

            const [results]: any = await db.execute(query, [id_user])

            return results;
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}