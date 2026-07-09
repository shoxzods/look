import express from "express";
import { configDotenv } from "dotenv";
configDotenv();
import mainRouter from "./routes/main.routes.js";

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(mainRouter);

app.use((error , req , res , next ) => {
    if ( error.status ) {
        return res.status(error.status).json({
            success:false,
            message: error.message
        })
    } else {
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
});

app.listen(port , () => console.log('server is running'));