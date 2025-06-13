"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserPg = exports.getUser = void 0;
const user_1 = require("../Models/user");
const postgres_1 = require("./postgres");
const getUser = async (email) => {
    try {
        await user_1.userModel.sync();
        const userM = await user_1.userModel.findOne({
            where: {
                email: email,
            },
        });
        if (userM) {
            const user = {
                f_name: userM.dataValues.f_name,
                l_name: userM.dataValues.l_name,
                uid: userM.dataValues.uid,
                email: userM.dataValues.email,
                password: userM.dataValues.password,
            };
            console.log('in getUser, found user: ' + user.f_name);
            return user;
        }
        else {
            return null;
        }
    }
    catch (e) {
        console.log("Error in getUser: " + e);
        return null;
    }
};
exports.getUser = getUser;
const getUserPg = async (email) => {
    try {
        const data = await postgres_1.pool.query("SELECT * FROM users WHERE email=$1", [
            email,
        ]);
        const user = {
            f_name: data.rows[0].f_name,
            l_name: data.rows[0].l_name,
            email: data.rows[0].email,
            password: data.rows[0].password,
            uid: data.rows[0].uuid,
        };
        return user;
    }
    catch (e) {
        console.log(e);
        return null;
    }
};
exports.getUserPg = getUserPg;
