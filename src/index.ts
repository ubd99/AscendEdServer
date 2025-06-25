import express from "express";
import cors from "cors";
import "./config/pport";
import passport from "passport";
import dotenv from 'dotenv';
import { sequelise } from "./DB/postgres";
import { apiRouter } from "./routes/api";

dotenv.config();

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
};

(async () =>{
    try{
        await sequelise.authenticate()
        console.log('Sequelize has successfully established a connection with PostgreSQL')
    }catch(e){
        console.log('Error authenticating to postgres: ' + e);
    }
})();

app.use(express.json());

app.use(cors(corsOptions));

app.use(passport.initialize());

app.use("/api", apiRouter);

app.listen(5000, () => {
  console.log("listening on PORT 5000");
});
