import pool from "../db/config.js";

class Users {
    constructor() {}
        async createUser ( req , res )  {
            return res.json('ok')
        }
}

const user = new Users();
export default user;