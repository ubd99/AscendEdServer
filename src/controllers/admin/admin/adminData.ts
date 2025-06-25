import { Request, Response, NextFunction } from "express";

const adminData = async (req: Request, res: Response, next: NextFunction) => {
    res.json({
        data : "This is the admin route...."
    })
};

export {adminData}