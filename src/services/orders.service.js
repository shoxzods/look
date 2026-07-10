import pool from "../db/config.js";
import { NotFound } from "../utils/errors.js";

class Orders {
    constructor() {}

    static async orders(body) {
     try {
        const {user_id, product_id , count} = body;
        const data = await pool.query('insert into orders ( user_id, product_id , count ) values ($1 , $2 , $3)' , [ user_id , product_id , count ]);

        return {
            success:true,
            message:"order created successfully"
        }
    } catch(err) {
        throw new NotFound( 404 , "user_id or product_id not found" );
    }
    }

}

export default Orders;