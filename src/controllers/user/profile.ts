import { Request, Response } from "express";

const profile = (req: Request, res: Response) =>{
    res.send('hello from user profile');
}

export {profile}