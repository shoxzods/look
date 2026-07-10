import productsService from "../services/products.service.js";

class Products {
    constructor() {}

    async getAllProducts(req , res) {
        const datas = await productsService.products();

        return res.status(200).json({
            status:"ok",
            data: datas
        })
    }
}

const products = new Products();

export default products;