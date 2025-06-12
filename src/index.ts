import express from 'express';
import cors from 'cors';
import { apiRouter } from './routes/api';
import './config/pport'
import passport from 'passport';

const app = express();

const corsOptions = {
    origin : "http://localhost:5173",
}

app.use(express.json());

app.use(cors(corsOptions));

app.use(passport.initialize())

app.use('/api',apiRouter)

app.listen(5000, ()=>{
    console.log("listening on PORT 5000");
})