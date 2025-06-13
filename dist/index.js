"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const api_1 = require("./routes/api");
require("./config/pport");
const passport_1 = __importDefault(require("passport"));
const postgres_1 = require("./DB/postgres");
const app = (0, express_1.default)();
const corsOptions = {
    origin: "http://localhost:5173",
};
(async () => {
    try {
        await postgres_1.sequelise.authenticate();
        console.log('Sequelize has successfully established a connection with PostgreSQL');
    }
    catch (e) {
        console.log('Error authenticating to postgres: ' + e);
    }
})();
app.use(express_1.default.json());
app.use((0, cors_1.default)(corsOptions));
app.use(passport_1.default.initialize());
app.use("/api", api_1.apiRouter);
app.listen(5000, () => {
    console.log("listening on PORT 5000");
});
