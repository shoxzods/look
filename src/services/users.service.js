import pool from "../db/config.js";
import { Conflict } from "../utils/errors.js";

class Users {
    constructor() {}

    static async createUsers( body ) {
        const { user_name , phone } =  body;
        const checkUser = await pool.query('select * from users where user_name = $1 and phone = $2' , [ user_name , phone ]);
 
        if ( checkUser.rowCount )
            throw new Conflict(409 , 'user already exists')

        await pool.query('insert into users(user_name , phone) values( $1 , $2 ) returning *' , [ user_name , phone ]);

        return {
            success:true,
            message:"user created successfully"
        }
    }

    static async getAllUsers() {
        return (await pool.query('select * from users')).rows;
    }
}

export default Users;