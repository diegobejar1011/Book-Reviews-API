import { ConnectionOptions } from "mysql2";
import { config } from "dotenv"

config();

export const DataConfig: ConnectionOptions = {
    host: "tomo-database.cjy0nlhvgoxa.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "Apptomodb25",
    database: "TOMO"
};