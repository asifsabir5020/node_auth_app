import express from "express";
const app = express();
import dotEnv from 'dotenv';
dotEnv.config();
import morgan from "morgan";
import 'express-async-errors';
import { connectDB } from "./db/connection.js";
import { bookRouter } from './routers/book.js';
import { notFound, errorHandler } from "./middlewares/errors.js";

// as this is helpful in development
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/v1/books', bookRouter);


//middleware for not found 404
app.use(notFound);

app.use(errorHandler);


// async is used here to connect db first and then start
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