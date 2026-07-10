import { BadRequest } from "../utils/errors.js";
import { orderSchema } from "../utils/validation.js";

class Orders {
    constructor() {}

    checkOrders( req , res , next) {
        const check = orderSchema.validate(req.body);

        if ( check.error ) {
            next(new BadRequest(400 , check.error.message))
        } else if ( !check.value ) {
            next(new BadRequest(400 , 'body is required'))
        }

        next()
    }
}

const orders = new Orders();
export default orders;