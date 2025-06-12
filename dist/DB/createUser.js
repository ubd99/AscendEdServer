"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser = void 0;
const postgres_1 = require("./postgres");
const bcrypt_1 = __importDefault(require("bcrypt"));
const CreateUser = async (user) => {
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
        const name = await postgres_1.pool.query(`SELECT f_name FROM users WHERE l_name=$1`, [
            "khan",
        ]);
        console.log(`The returned name is ${name.rows}`);
    }
    catch (e) {
        if (e.code === "23505") {
            console.log("Error in CreateUser: " + e);
            return "E-Mail already registered.";
        }
        console.log("Error in CreateUser: " + e);
    }
};
exports.CreateUser = CreateUser;
