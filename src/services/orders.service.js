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

    
    static async userOrders(params) {
    
    const data = await pool.query(
    `SELECT
        o.user_id,
        o.product_id,
        p.product_name,
        p.product_img,
        SUM(o.count) AS count
    FROM orders o
    JOIN products p
        ON p.id = o.product_id
    WHERE o.user_id = $1
    GROUP BY
        o.user_id,
        o.product_id,
        p.product_name,
        p.product_img` , [params.id]);

    if ( !data.rowCount ) {
        throw new NotFound(404 , 'order not found')
    }

    return data.rows
  }
}

export default Orders;