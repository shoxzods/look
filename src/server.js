import express from "express";
import { configDotenv } from "dotenv";
configDotenv();

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.listen(port , () => console.log('server is running'));