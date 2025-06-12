import { Request, Response } from "express"
import { User } from "../interfaces/user";
import { CreateUser } from "../DB/createUser";

const Signup = async(req: Request, res: Response) => {
    console.log(req.body);
    const user: User = {
        f_name : req.body.f_name,
        l_name : req.body.l_name,
        email : req.body.email,
        password : req.body.password,
        uid : req.body.uid
    }
    await CreateUser(user);
}

export {Signup}