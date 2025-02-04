import { Request, Response } from "express";
import { PostReviewService } from "../../application";
import { ReviewReq } from "../../domain/entities";

export class PostReviewController {
    constructor(private readonly postReviewService: PostReviewService) {}
    async execute(req: Request, res: Response){
        try {
            const review: ReviewReq = req.body;
            const { id } = req.params

            const id_review = await this.postReviewService.execute(parseInt(id), review);

            res.status(200).json({ id: id_review });
        } catch (error: any) {
            console.log(error)
            res.status(500).json({
                message: error.message
            })
        }
    }
}