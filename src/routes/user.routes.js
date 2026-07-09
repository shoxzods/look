import { Router } from "express";
import userController from "../controllers/users.controller.js";
import userMiddleware from "../middleware/users.middleware.js";

const route = Router();

route.post('/create' , userMiddleware.checkUser , userController.createUser)
     .get('/all' , userController.getAllUsers);

export default route;