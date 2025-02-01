export interface EncryptRepository {
    encodePassword(plantextPassword: string): Promise<string>
    decodePassword(plantexPassword: string, encryptedPassword: string): Promise<boolean>
}