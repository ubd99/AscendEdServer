"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const corsOptions = {
    origin: "http://localhost:5173",
};
app.use((0, cors_1.default)(corsOptions));
app.get('/api', (req, res) => {
    res.send('hello world');
});
app.listen(5000, () => {
    console.log("listening on PORT 5000");
});
