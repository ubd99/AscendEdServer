import { Pool } from "pg";
import { Sequelize } from "sequelize";

const pool = new Pool({
    user : 'postgres',
    password : 'asddf123',
    host : 'localhost',
    port : 5432,
    database : 'ascendeddb'
})

const sequelise: Sequelize = new Sequelize('ascendeddb', 'postgres', 'asddf123', {
    host: 'localhost',
    dialect: 'postgres'
})

export {pool, sequelise}