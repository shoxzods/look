import { Router } from "express";
import userRouter from "./user.routes.js";

const route= Router();

route.use('/user' , userRouter);

export default route;