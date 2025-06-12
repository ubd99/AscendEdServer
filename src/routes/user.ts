import express from 'express'
import { prof } from '../controllers/user/profile';

const userRouter: express.Router = express.Router();

userRouter.get('/profile', prof);

export {userRouter}