import { EncryptRepository } from "../../../domain/repositories/EncryptReposirty";
import bcrypt from "bcrypt";

export class BcrypRepository implements EncryptRepository{
    async encodePassword(plantextPassword: string): Promise<string> {
        try {
            
            const hashPassword = await bcrypt.hash(plantextPassword, 10);

            return hashPassword;
        
        } catch (error: any) {
            throw new Error(error);
        }
    }

    async decodePassword(plantexPassword: string, encryptedPassword: string): Promise<boolean> {
        try {
            
            const verified = await bcrypt.compare(plantexPassword, encryptedPassword);

            return verified;
        } catch (error: any) {
            throw new Error(error);
        }
    }
}