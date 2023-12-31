import express from 'express'
import { MongoServerClosedError } from 'mongodb';
import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("connected to mongo")
}).catch((err) => {
    console.log("mongo err", err)
})


const app = express();

app.listen(3000, () => {
    console.log("Server is runnning at 3000!!")
})