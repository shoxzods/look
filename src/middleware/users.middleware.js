import schema from "../utils/validation.js";
import { BadRequest } from "../utils/errors.js";

class Users {
    constructor() {}

    checkUser( req , res , next ) {
        const valid = schema.validate(req.body);
        if( valid.error)
            return next(new BadRequest( 400 , valid.error.message));

        return next();
    }
}

const users = new Users();
export default users;