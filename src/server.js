import express from "express";
const app = express();
import dotEnv from 'dotenv';
dotEnv.config();
import { connectDB } from "./db/connection.js";




app.use('/', (req, res) => {
    res.send('Hello World');
});





const start = async () => {
    try{
        const port = process.env.PORT || 8000;
        await connectDB(process.env.MONGODB_URL);
        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        });
    }catch(error){
        console.log(error);
    }
}

start();