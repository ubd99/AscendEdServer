import { Pool } from "pg";

const pool = new Pool({
    user : 'postgres',
    password : 'asddf123',
    host : 'localhost',
    port : 5432,
    database : 'ascendeddb'
})

export {pool}