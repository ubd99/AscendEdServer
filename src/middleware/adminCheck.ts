import { NextFunction, Request, Response } from "express";
import { User } from "../interfaces/user";

const adminCheck = (req: Request, res: Response, next: NextFunction) => {
  console.log("adminCheck triggered");
  const user: User = req.user as User;
  console.log('user is ', user.f_name)
  if (user.isadmin) {
    next();
  } else {
    console.log('This user is not an admin')
    res
      .status(404)
      .json({
        message: "user" + user.f_name + "is not an admin, access denied",
      });
  }
};

export { adminCheck };
