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

    checkUserId( req , res , next ) {
        if ( isNaN(+req.params.id ) ) {
            return next(new BadRequest(400 , 'id must be a number'))
        } else if ( Math.floor(+req.params.id) != +req.params.id ) {
           return next(new BadRequest(400 , 'id must be an integer'))
        }

        return next()
    }
}

const orders = new Orders();
export default orders;