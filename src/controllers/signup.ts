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
        isadmin : false
    }
    const registered : boolean = await CreateUser(user);
    if(registered){
        res.status(200).json({message: `created user: ${user.f_name} successfully`});
    }else{
        res.status(401).json({message : `User already exists`})
    }
}

export {Signup}