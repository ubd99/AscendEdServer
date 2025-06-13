"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = require("passport-local");
const bcrypt_1 = __importDefault(require("bcrypt"));
const getUser_1 = require("../DB/getUser");
passport_1.default.use(new passport_local_1.Strategy({
    usernameField: "email",
}, async (email, password, done) => {
    console.log('passport is running');
    try {
        const user = await (0, getUser_1.getUser)(email);
        if (user === null) {
            return done(null, false, { message: "Error: User not found" });
        }
        const psw = await bcrypt_1.default.compare(password, user.password);
        if (!psw) {
            return done(null, false, { message: "Error: invalid password" });
        }
        console.log('in passport, signin success, with returned user: ' + user.f_name);
        return done(null, user);
    }
    catch (e) {
        console.log(e);
        return done(e);
    }
}));
