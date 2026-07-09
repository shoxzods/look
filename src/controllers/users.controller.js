import userService from "../services/users.service.js";

class Users {
    constructor() {}
        async createUser ( req , res , next ) {
          try {
            const data = await userService.createUsers(req.body);
            return res.status(200).json(data);
          } catch(err) {
            return next(err)
          }
        }
}

const user = new Users();
export default user;