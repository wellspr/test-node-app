import express from "express";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.send("Hello!");
});

app.listen(process.env.PORT || port, () => {
    console.log(`App listening on ${port}`);
});