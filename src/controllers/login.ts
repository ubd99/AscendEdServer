import { Request, Response, NextFunction } from "express";
import passport from "passport";
import { User } from "../interfaces/user";

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
          res.status(200).json({ message: "login success", user });
        }
      } catch (e) {
        console.log(e);
      }
    }
  )(req , res, next);
};

export { login };
