"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelise = exports.pool = void 0;
const pg_1 = require("pg");
const sequelize_1 = require("sequelize");
const pool = new pg_1.Pool({
    user: 'postgres',
    password: 'asddf123',
    host: 'localhost',
    port: 5432,
    database: 'ascendeddb'
});
exports.pool = pool;
const sequelise = new sequelize_1.Sequelize('ascendeddb', 'postgres', 'asddf123', {
    host: 'localhost',
    dialect: 'postgres'
});
exports.sequelise = sequelise;
