import { Request, Response } from "express"
const login = (req: Request, res: Response) => {
    res.send('hello from login');
}

export {login}