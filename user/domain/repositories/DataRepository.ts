import { UserReq, User } from "../entities";

export interface DataRepository {
    createUser(user: UserReq): Promise<number>
    getUser(email: string): Promise<User>
}