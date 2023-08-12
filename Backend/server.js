import express from "express";
import colours from "colours";
import dotenv from "dotenv";

dotenv.config();

const app = express()

app.get('/', (req, res) => {
    res.send(
        message = "Welcome to child vaccination system"
    )
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("-------Server is running on port------- " + PORT);
});