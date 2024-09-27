import express from "express"
import dotenv from "dotenv"
import {connectDatabase} from "./config/dbConnect.js"
import productsRouter from "./routes/product.js"
// default named import istediyimizi qoya bilerik

dotenv.config({
    path:"config/config.env"
})
const app = express()

app.use(express.json());



connectDatabase()


// import productRoutes from "..routes/product.js"


app.use("/api/v1" , productsRouter)
app.listen(process.env.PORT , ()=> console.log("Server " + process.env.PORT + "ci portda calisir") )




