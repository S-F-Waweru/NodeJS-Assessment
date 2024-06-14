import { Router } from "express";
import { addProduct, getProducts, paginatedProducts, searchProduct } from "../Controllers/productController";


const productRouter = Router()
productRouter.post("", addProduct)
productRouter.get("", getProducts)
productRouter.get("/:product", searchProduct)
productRouter.get("/page/:num", paginatedProducts)




export default productRouter