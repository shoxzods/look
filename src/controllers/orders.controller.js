import pool from "../db/config.js";
import ordersService from "../services/orders.service.js";

class Orders {
    constructor() {}

    async addOrders( req , res, next ) {
        try {
            const message = await ordersService.orders(req.body);
            return res.status(200).json(message);
        } catch(err) {
            return next(err)
        }
    }

    async getUserOrder( req , res , next ) {

       const data = await ordersService.userOrders(req.params);

        return res.status(200).json({
            success:true,
            message:data
        })
    }
}

const orders = new Orders();

export default orders