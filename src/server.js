import express from "express";
import { configDotenv } from "dotenv";
configDotenv();
import { join } from "path";
import mainRouter from "./routes/main.routes.js";

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(mainRouter);
app.use('/uploads' , express.static(join(process.cwd() , 'src' , 'uploads')));

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
})
.all(/.*/ , ( req , res ) => {
    console.log(req.url)
    return res.status(404).json({
        status:false,
        message:`${req.url}'s ${req.method} method was not found`
    })
})

app.listen(port , () => console.log('server is running'));