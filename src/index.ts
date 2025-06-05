import express, {Request, Response} from 'express';
import cors from 'cors';

const app = express();

const corsOptions = {
    origin : "http://localhost:5173",
}

app.use(cors(corsOptions));

app.get('/api',(req: Request, res: Response)=>{
    res.send('hello world');
})

app.listen(5000, ()=>{
    console.log("listening on PORT 5000");
})