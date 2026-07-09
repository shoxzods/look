import express from "express";
import { configDotenv } from "dotenv";
configDotenv();
import mainRouter from "./routes/main.routes.js";

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(mainRouter);

app.use((error , req , res , next ) => {
    if ( error.status != 500 ) {
        return res.status(error.status).json({
            success:false,
            message: error.message
        })
    }
});

app.listen(port , () => console.log('server is running'));