import { UserReq, User } from "../../../domain/entities";
import { DataRepository } from "../../../domain/repositories/DataRepository";
import { db } from "../../../../shared/mysql/application/conn";

export class DataRepositorySQL implements DataRepository {
    async createUser(user: UserReq): Promise<number> {
        try {
            const {username, email, password} = user;

            const query = "INSERT INTO user (username, email, password) VALUES (?, ?, ?)";
    
            const result : any = await db.execute(query, [username, email, password]);
    
            return result[0].insertId;
        } catch (error: any) {
            throw new Error(error);
        }
    }

    async getUser(email: string): Promise<User> {
        try {
            const query = "SELECT id, username, email, password FROM user WHERE email = ?";

            const [rows]: any = await db.execute(query, [email]);

            return rows[0];
        } catch (error: any) {
            throw new Error(error);
        }
    }
}