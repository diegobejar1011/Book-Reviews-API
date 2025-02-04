import { Request, Response } from "express";
import { PostReviewService } from "../../application";
import { ReviewReq } from "../../domain/entities";

export class PostReviewController {
    constructor(private readonly postReviewService: PostReviewService) {}
    async execute(req: Request, res: Response){
        try {
            const review: ReviewReq = req.body;

            const id = await this.postReviewService.execute(review);

            res.status(200).json({ id: id });
        } catch (error: any) {
            console.log(error)
            res.status(500).json({
                message: error.message
            })
        }
    }
}