import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.get("/", (req, res) => {
    res.send("Hello!");
});

const port = 4000;
app.listen(process.env.PORT || port, () => {
    console.log(`App listening on ${port}`);
});