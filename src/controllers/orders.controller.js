import ordersService from "../services/orders.service.js";
import { NotFound } from "../utils/errors.js";


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

    getUserOrder( req , res , next ) {
        return res.status(200).json({
            success:true,
            message:"ok"
        })
    }
}

const orders = new Orders();

export default orders