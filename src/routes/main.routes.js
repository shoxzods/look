import { Router } from "express";
import userRouter from "./user.routes.js";
import productRouter from "./products.route.js";
import orderRouter from "./orders.route.js";

const route= Router();

route.use('/user' , userRouter)
     .use('/products' , productRouter)
     .use('/' , orderRouter);

export default route;