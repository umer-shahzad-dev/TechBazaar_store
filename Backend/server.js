import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

dotenv.config();

// Middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const PORT = process.env.PORT || 4001;

app.get("/", (req,res)=>{
    res.send("Server running");
})

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`);
})