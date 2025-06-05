import { profile } from 'console';
import express from 'express'

const userRouter: express.Router = express.Router();

userRouter.get('/profile', profile);

export {userRouter}