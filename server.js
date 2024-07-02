import express from 'express';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

const app = express();
const port = 5252;

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

import UserRoutes from './routes/userRoutes.js';

//exporting routes
app.use('/', UserRoutes);

app.get('/',(req,res)=>{
    res.send('<h1>Hello World!</h1>');
})

app.listen(port, async()=>{
    try{
        await mongoose.connect(process.env.MONGODB);
        console.log(`Server is listenting to the port ${port}`)
    }
    catch(err){
        console.error(err);
        process.exit(1);
    }
})