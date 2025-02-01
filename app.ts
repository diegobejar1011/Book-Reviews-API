import express from "express"
import cors from "cors"
import { config } from "dotenv"

import { indexRouter } from "./shared/IndexRouter"

import { db } from "./shared/mysql/application/conn";

const app = express();

config();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;
app.set("PORT", port);

app.use("/api", indexRouter);

app.listen(app.get("PORT"), () => {
    console.log("API Book-Reviews running in server...");
});

db.connect()
.then(() => {
    console.log("Connected with database...")
})
.catch((error) => {
    console.log(error);
})