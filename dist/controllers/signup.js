"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Signup = void 0;
const createUser_1 = require("../DB/createUser");
const Signup = async (req, res) => {
    console.log(req.body);
    const user = {
        f_name: req.body.f_name,
        l_name: req.body.l_name,
        email: req.body.email,
        password: req.body.password,
        uid: req.body.uid
    };
    const registered = await (0, createUser_1.CreateUser)(user);
    if (registered) {
        res.status(200).json({ message: `created user: ${user.f_name} successfully` });
    }
    else {
        res.status(401).json({ message: `User already exists` });
    }
};
exports.Signup = Signup;
