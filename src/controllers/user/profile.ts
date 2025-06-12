import { Request, Response } from "express";
import { pool } from "../../DB/postgres";

const prof = async (req: Request, res: Response) =>{
    const newTableRow = await pool.query('SELECT NAME FROM USERS');

    res.send(newTableRow.rows[0]['name']);
}

export {prof}