"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prof = void 0;
const postgres_1 = require("../../DB/postgres");
const prof = async (req, res) => {
    const newTableRow = await postgres_1.pool.query('SELECT NAME FROM USERS');
    res.send(newTableRow.rows[0]['name']);
};
exports.prof = prof;
