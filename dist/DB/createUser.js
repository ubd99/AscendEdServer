"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser = exports.CreateUserPg = void 0;
const user_1 = require("../Models/user");
const postgres_1 = require("./postgres");
const bcrypt_1 = __importDefault(require("bcrypt"));
const CreateUser = async (userP) => {
    try {
        const hashedPass = await bcrypt_1.default.hash(userP.password, 10);
        await user_1.userModel.sync();
        const user = await user_1.userModel.create({
            email: userP.email,
            f_name: userP.f_name,
            l_name: userP.l_name,
            password: hashedPass,
            isadmin: false,
        });
        console.log('user: ' + userP.f_name + 'created');
        return true;
    }
    catch (e) {
        console.log('error in CreateUser: ' + e);
        return false;
    }
};
exports.CreateUser = CreateUser;
const CreateUserPg = async (user) => {
    try {
        await postgres_1.pool.query(`CREATE TABLE IF NOT EXISTS users(
                      uid UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                      email TEXT UNIQUE NOT NULL,
                      f_name TEXT,
                      l_name TEXT,
                      password TEXT,
                      created_at TIMESTAMP DEFAULT NOW(),
                      isAdmin BOOLEAN DEFAULT FALSE);`);
        const hashedPass = await bcrypt_1.default.hash(user.password, 10);
        await postgres_1.pool.query(`INSERT INTO users (email, f_name, l_name, password)
                    VALUES ($1,$2,$3,$4)`, [user.email, user.f_name, user.l_name, hashedPass]);
    }
    catch (e) {
        if (e.code === "23505") {
            console.log("Error in CreateUser: " + e);
            return "E-Mail already registered.";
        }
        console.log("Error in CreateUser: " + e);
    }
};
exports.CreateUserPg = CreateUserPg;
