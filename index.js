import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.get("/", (req, res) => {
    res.send("Hello!");
});

app.listen(process.env.PORT, () => {
    console.log(`App listening on ${process.env.PORT}`);
});