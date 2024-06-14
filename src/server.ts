import express, {json} from 'express'
import productRouter from './Routes/productRoutes'


const app = express()

//middleware
app.use(json())
app.use("/products", productRouter)




app.listen(4000 , ()=>{
    console.log("server running .......")
})