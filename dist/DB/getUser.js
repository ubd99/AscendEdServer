"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const postgres_1 = require("./postgres");
const getUser = async (email) => {
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
exports.getUser = getUser;
