import express from 'express';
import { login } from '../controllers/login';
import { userRouter } from './user';

const apiRouter: express.Router = express.Router();

apiRouter.get("/login", login);

apiRouter.use("/user", userRouter)

export {apiRouter}