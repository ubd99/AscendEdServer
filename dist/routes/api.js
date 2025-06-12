"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = __importDefault(require("express"));
const login_1 = require("../controllers/login");
const user_1 = require("./user");
const signup_1 = require("../controllers/signup");
const apiRouter = express_1.default.Router();
exports.apiRouter = apiRouter;
apiRouter.post("/login", login_1.login);
apiRouter.post("/signup", signup_1.Signup);
apiRouter.use("/user", user_1.userRouter);
