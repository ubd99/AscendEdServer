import { User } from "../interfaces/user";
import { userModel } from "../Models/user";
import { pool, sequelise } from "./postgres";
import bcrypt from "bcrypt";

const CreateUser = async (userP: User) => {
  try {
    const hashedPass = await bcrypt.hash(userP.password, 10);
    await userModel.sync();
    const user = await userModel.create({
      email: userP.email,
      f_name: userP.f_name,
      l_name: userP.l_name,
      password: hashedPass,
      isadmin: false,
    });
    console.log('user: ' + userP.f_name + 'created');
    return true
  } catch (e) {
    console.log('error in CreateUser: ' + e);
    return false;
  }
};

const CreateUserPg = async (user: User) => {
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
  } catch (e: any) {
    if (e.code === "23505") {
      console.log("Error in CreateUser: " + e);
      return "E-Mail already registered.";
    }
    console.log("Error in CreateUser: " + e);
  }
};

export { CreateUserPg, CreateUser };
