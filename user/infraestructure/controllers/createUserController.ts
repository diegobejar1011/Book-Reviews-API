import { Request, Response } from "express";
import { CreateUserService } from "../../application/createUserService";
import { UserReq } from "../../domain/entities";

export class CreateUserController{
    constructor(private readonly createUserService: CreateUserService){}
    async execute(req: Request, res: Response) {
        try {
            
            const user : UserReq = req.body;

            const id = await this.createUserService.execute(user);

            res.status(200).json(id);

        } catch (error: any) {
            console.log(error);
            res.status(500).json(error.message);
        }
    }
}