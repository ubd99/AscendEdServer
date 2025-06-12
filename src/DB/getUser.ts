import { User } from "../interfaces/user";
import { pool } from "./postgres";

const getUser = async (email: string) => {
  try {
    const data = await pool.query("SELECT * FROM users WHERE email=$1", [
      email,
    ]);
    const user: User = {
      f_name: data.rows[0].f_name,
      l_name: data.rows[0].l_name,
      email: data.rows[0].email,
      password: data.rows[0].password,
      uid: data.rows[0].uuid,
    };
    return user;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export { getUser }