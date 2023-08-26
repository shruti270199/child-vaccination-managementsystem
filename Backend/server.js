import express from "express";
import colours from "colours";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import connectDB from "./db.js";

dotenv.config();

//db config
connectDB()


const app = express()

//middleware
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send(
        message = "Welcome to child vaccination system"
    )
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`-------Server is running on port ${process.env.PORT}------- `);
});