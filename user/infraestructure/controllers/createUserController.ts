import { Request, Response } from "express";
import { CreateUserService } from "../../application/createUserService";

export class CreateUserController{
    constructor(private readonly createUserService: CreateUserService){}
    async execute(req: Request, res: Response) {
        try {
            
            const user = req.body;

            const id = this.createUserService.execute(user);

            return res.status(200).json(id);

        } catch (error: any) {
            console.log(error);
            return res.status(500).json(error.message);
        }
    }
}