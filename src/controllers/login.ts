import { Request, Response, NextFunction } from "express";
import passport from "passport";
import jwt from 'jsonwebtoken';
import { User } from "../interfaces/user";
import dotenv from 'dotenv';

dotenv.config();

const login = async (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body)
  await passport.authenticate(
    "local",
    { session: false },
    (err: any, user: User | false, info: any) => {
      console.log('passport.auth triggered')
      try {
        if (err) {
          res.send(err);
        }
        if (!user) {
          console.log('Invalid Creds')
          res
            .status(401)
            .json({ message: "login failed: Invalid Credentials." });
        }
        if (user) {
          console.log("login Success");
          const token = jwt.sign({uid:user.uid}, process.env.JWT_SECRET as string, {expiresIn : '1h'})
          res.send(token)
          console.log(`token ${token} sent`);
        }
      } catch (e) {
        console.log(`error logging in ${e}`);
      }
    }
  )(req , res, next);
};

export { login };
