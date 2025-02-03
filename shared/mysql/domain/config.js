"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataConfig = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.DataConfig = {
    host: "tomo-database.cjy0nlhvgoxa.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "Apptomodb25",
    database: "TOMO"
};
