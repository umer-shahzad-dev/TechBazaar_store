import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
const app = express();

dotenv.config();

// Middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const PORT = process.env.PORT || 4001;

// connect to db
connectDB();

app.get("/", (req,res)=>{
    res.send("Server running");
})

app.listen(PORT, ()=>{
    console.log(`✅ Server is running on PORT ${PORT}`);
})