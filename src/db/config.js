import { Pool } from "pg";
import { configDotenv } from "dotenv";
configDotenv();

const pool = new Pool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    database:process.env.DB_NAME,
    port:process.env.DB_PORT,
    password:process.env.DB_PASSWORD
});

class Connection {
    constructor() {}
    connect() {
        try {
            pool.connect();
            console.log('database is connect')
        } catch(err) {
            console.log('database disconnect' , err.message)
        }
    }
}

const connection = new Connection();
connection.connect();

export default pool;