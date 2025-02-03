"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const IndexRouter_1 = require("./shared/IndexRouter");
const conn_1 = require("./shared/mysql/application/conn");
const app = (0, express_1.default)();
(0, dotenv_1.config)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const port = process.env.PORT || 3000;
app.set("PORT", port);
app.use("/api", IndexRouter_1.indexRouter);
app.listen(app.get("PORT"), () => {
    console.log("API Book-Reviews running in server...");
});
conn_1.db.connect()
    .then(() => {
    console.log("Connected with database...");
})
    .catch((error) => {
    console.log(error);
});
