class Orders {
    constructor() {}

    checkOrders( req , res , next) {
        console.log(req.params)
    }
}

const orders = new Orders();
export default orders;
