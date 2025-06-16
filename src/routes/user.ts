import express from 'express'
import { prof } from '../controllers/user/profile';
import passport from 'passport';

const userRouter: express.Router = express.Router();

userRouter.get('/profile',passport.authenticate('jwt', {session : false}), prof);

export {userRouter}