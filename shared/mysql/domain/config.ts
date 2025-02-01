import { ConnectionOptions } from "mysql2";
import { config } from "dotenv"

config();

export const DataConfig: ConnectionOptions = {
    host: "127.0.0.1",
    user: "root",
    password: "Nanami04?",
    database: "TOMO"
};