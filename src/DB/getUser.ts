import { User } from "../interfaces/user";
import { userModel } from "../Models/user";
import { pool, sequelise } from "./postgres";

const getUser = async (email: string) => {
  try {
    await userModel.sync();
    const userM = await userModel.findOne({
      where: {
        email: email,
      },
    });
    if (userM) {
      const user: User = {
        f_name: userM.dataValues.f_name,
        l_name: userM.dataValues.l_name,
        uid: userM.dataValues.uid,
        email: userM.dataValues.email,
        password: userM.dataValues.password,
      };
      console.log("in getUser, found user: " + user.f_name);
      return user;
    } else {
      return null;
    }
  } catch (e) {
    console.log("Error in getUser: " + e);
    return null;
  }
};

const getUserByUid = async (uid: string) => {
  try {
    await userModel.sync();
    const data = await userModel.findOne({
      where : {
        uid : uid,
      }
    });
    if(data){
      const user: User = {
        uid : data.dataValues.uid,
        f_name : data.dataValues.f_name,
        l_name : data.dataValues.l_name,
        email : data.dataValues.email,
        password : data.dataValues.password
      }

      return user;
    }
    return null;
  } catch (e) {
    console.log('error in getUserByUid: ' + e);
    return null;
  }
};

const getUserPg = async (email: string) => {
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

export { getUser, getUserPg, getUserByUid };
