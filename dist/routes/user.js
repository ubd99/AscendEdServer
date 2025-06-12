"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const profile_1 = require("../controllers/user/profile");
const userRouter = express_1.default.Router();
exports.userRouter = userRouter;
userRouter.get('/profile', profile_1.prof);
