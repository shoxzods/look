import { Router } from "express";
import ordersController from "../controllers/orders.controller.js";
import ordersMiddleware from "../middleware/orders.middleware.js";

const router = Router();

router.post('/order' , ordersMiddleware.checkOrders , ordersController.addOrders)
      .get('/order/user/:id' , ordersMiddleware.checkUserId , ordersController.getUserOrder);

export default router;