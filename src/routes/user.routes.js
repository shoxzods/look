import { Router } from "express";
import userController from "../controllers/users.controller.js";

const route = Router();

route.post('/create' , userController.createUser );

export default route;