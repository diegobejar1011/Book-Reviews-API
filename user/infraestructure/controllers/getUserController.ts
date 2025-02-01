import { Request, Response } from "express";
import { GetUserService } from "../../application/getUserService";

export class GetUserController {
    constructor (private readonly getUserService: GetUserService) {}
    async execute(req: Request, res: Response) {
        try {

            const { email } = req.params;

            const user = this.getUserService.execute(email);

            return res.status(200).json(user);

        } catch (error: any) {
            console.log(error)
            return res.status(500).json(error.message)
        }
    }
}