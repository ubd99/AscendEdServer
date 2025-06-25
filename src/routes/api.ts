import express from "express";
import passport from "passport";
import { login } from "../controllers/login";
import { userRouter } from "./user";
import { Signup } from "../controllers/signup";
import { adminRouter } from "./admin/admin";
import { adminCheck } from "../middleware/adminCheck";
import { PCourseRouter } from "./courses";
import { init } from "../controllers/init";

const apiRouter: express.Router = express.Router();

apiRouter.get("/init", passport.authenticate("jwt", { session: false }), init);

apiRouter.post("/login", login);

apiRouter.post("/signup", Signup);

apiRouter.use("/user", userRouter);

apiRouter.use("/courses", PCourseRouter);

apiRouter.use(
  "/admin",
  passport.authenticate("jwt", { session: false }),
  adminCheck,
  adminRouter
);

export { apiRouter };
