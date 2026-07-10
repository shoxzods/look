import pool from "../db/config.js";

class Products {
    constructor() {}

    static async products(  ) {
        const data = await pool.query('select * from products');
        return data.rows
    }
}

export default Products;