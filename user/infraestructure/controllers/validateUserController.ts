import { Request, Response } from "express";
import { ValidateUserService } from "../../application";

export class ValidateUserController {
    constructor(private readonly validateUserService: ValidateUserService) {}
    async execute(req: Request, res: Response) {
        try {

            const { email, password } = req.body;

            const result = await this.validateUserService.execute(email, password);

            res.status(200).json(result);
        } catch (error: any) {
            res.status(500).json(error.message)
        }
    }
}