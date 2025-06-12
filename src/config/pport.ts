import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";
import { getUser } from "../DB/getUser";

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    async (email, password, done) => {
      console.log('passport is running')
      try {
        const user = await getUser(email);

        if (user === null) {
          return done(null, false, { message: "Error: User not found" });
        }

        const psw = await bcrypt.compare(password, user.password);

        if (!psw) {
          return done(null, false, { message: "Error: invalid password" });
        }

        return done(null, user);
      } catch (e) {
        console.log(e);
        return done(e);
      }
    }
  )
);
