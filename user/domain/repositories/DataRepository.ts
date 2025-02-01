import { UserReq, UserRes } from "../entities";

export interface DataRepository {
    createUser(user: UserReq): Promise<number>
    getUser(email: string): Promise<UserRes>
}