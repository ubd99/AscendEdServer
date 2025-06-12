import { User } from "../interfaces/user";
import { pool } from "./postgres";
import bcrypt from "bcrypt";

const CreateUser = async (user: User) => {
  try {
    await pool.query(`CREATE TABLE IF NOT EXISTS users(
                      uid UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                      email TEXT UNIQUE NOT NULL,
                      f_name TEXT,
                      l_name TEXT,
                      password TEXT,
                      created_at TIMESTAMP DEFAULT NOW(),
                      isAdmin BOOLEAN DEFAULT FALSE);`);
    const hashedPass = await bcrypt.hash(user.password, 10);
    await pool.query(
      `INSERT INTO users (email, f_name, l_name, password)
                    VALUES ($1,$2,$3,$4)`,
      [user.email, user.f_name, user.l_name, hashedPass]
    );
    const name = await pool.query(`SELECT f_name FROM users WHERE l_name=$1`, [
      "khan",
    ]);
    console.log(`The returned name is ${name.rows}`);
  } catch (e: any) {
    if(e.code === "23505"){
        console.log("Error in CreateUser: " + e);
        return "E-Mail already registered."
    }
    console.log("Error in CreateUser: " + e);
  }
};

export { CreateUser };
