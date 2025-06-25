import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import {
  ExtractJwt,
  Strategy as JWTStrategy,
  StrategyOptionsWithoutRequest,
} from "passport-jwt";
import bcrypt from "bcrypt";
import { getUser, getUserByUid } from "../DB/getUser";
import dotenv from 'dotenv';

dotenv.config();

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    async (email, password, done) => {
      console.log("passport is running");
      try {
        const user = await getUser(email);

        if (user === null) {
          return done(null, false, { message: "Error: User not found" });
        }

        const psw = await bcrypt.compare(password, user.password);

        if (!psw) {
          return done(null, false, { message: "Error: invalid password" });
        }
        console.log(
          "in passport, signin success, with returned user: " + user.f_name
        );
        return done(null, user);
      } catch (e) {
        console.log(e);
        return done(e);
      }
    }
  )
);

const jwtOptions: StrategyOptionsWithoutRequest = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET as string,
};

passport.use(
  new JWTStrategy(jwtOptions, async (payload, done) => {
    console.log('passport-jwt triggered');
    try {
      const user = await getUserByUid(payload.uid);
      if(user){
        return done(null, user);
      }
      return done(null, null);
    } catch (e) {
      return(e as Error, null);
    }
  })
);
