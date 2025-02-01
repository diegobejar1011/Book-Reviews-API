import { GetReviewsByUserService } from "../../application";
import { Request, Response } from "express";

export class GetReviewsByUserController {
    constructor(private readonly getReviewsByUserService: GetReviewsByUserService ){}
    async execute(req: Request, res: Response) {
        try {
            
            const { id } = req.params

            const reviews = await this.getReviewsByUserService.execute(parseInt(id))

            res.status(200).json(reviews)

        } catch (error: any) {
            console.log(error)
            res.status(500).json(error.message)
        }
    }
}