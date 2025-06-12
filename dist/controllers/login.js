"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const passport_1 = __importDefault(require("passport"));
const login = async (req, res, next) => {
    console.log(req.body);
    await passport_1.default.authenticate("local", { session: false }, (err, user, info) => {
        console.log('passport.auth triggered');
        try {
            if (err) {
                res.send(err);
            }
            if (!user) {
                console.log('Invalid Creds');
                res
                    .status(401)
                    .json({ message: "login failed: Invalid Credentials." });
            }
            if (user) {
                console.log("login Success");
                res.status(200).json({ message: "login success", user });
            }
        }
        catch (e) {
            console.log(e);
        }
    })(req, res, next);
};
exports.login = login;
