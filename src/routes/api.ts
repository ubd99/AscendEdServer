import express from 'express';
import { login } from '../controllers/login';
import { userRouter } from './user';
import { Signup } from '../controllers/signup';

const apiRouter: express.Router = express.Router();

apiRouter.post("/login", login);

apiRouter.post("/signup", Signup);

apiRouter.use("/user", userRouter)

export {apiRouter}