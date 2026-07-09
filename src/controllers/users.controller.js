class Users {
    constructor() {}
        createUser ( req , res )  {
            return res.json('ok')
        }
}

const user = new Users();

export default user;