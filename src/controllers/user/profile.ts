import { Request, Response } from "express";

const prof = async (req: Request, res: Response) =>{
    res.json({
        data: "This is the userProfile protected route"
    })
}

export {prof}