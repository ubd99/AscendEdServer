import express, {Request, Response} from 'express';
import cors from 'cors';
import { apiRouter } from './routes/api';

const app = express();

const corsOptions = {
    origin : "http://localhost:5173",
}

app.use(cors(corsOptions));

app.use('/api',apiRouter)

app.listen(5000, ()=>{
    console.log("listening on PORT 5000");
})