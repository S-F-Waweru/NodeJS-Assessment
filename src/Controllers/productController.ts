import { Response, Request, response } from "express";
import {v4 as uid } from 'uuid'
import { DBHelper } from "../DatabaseHelper";
import { Product } from "../Models";
import productRouter from "../Routes/productRoutes";



const dbInstance = new DBHelper() 

export async function addProduct( req:Request , res : Response){
    console.log("Add Product Function")
    try {
        const id  = uid()
        // console.log(id)
        console.log(req.body)
        const {name, price} = req.body
        console.log(id,name, price)
        await dbInstance.exec('addProduct', {id:id,name:name, price:price})

        return  res.status(201).json({message : "Product Added Succefully !!"})
   
    } catch (error:any) {
        return  res.status(500).json(error.message)
    }
}

export async function getProducts(req:Request, res:Response){
    try {
        let products = (await dbInstance.exec('getProducts',{})).recordset as Product[]
        if(products){
       return res.status(200).json({products})
        }
        return res.status(404).json({message : "Products not Found"})
        
    } catch (error:any) {
        return res.status(500).json(error.message)
    }

}



export async function searchProduct(req:Request<{product : string}>, res:Response){
    try {

        // const{product} = req.body

        // console.log(req.body)
        console.log(req.params.product)


        let gotProduct = await (await dbInstance.exec('searchProduct',{name: req.params.product})).recordset as Product[]
        if(gotProduct){
       return res.status(200).json(gotProduct)
        }
        return res.status(404).json({message : "Products not Found"})
    } catch (error:any) {
        return res.status(500).json(error.message)
        
    }

}


export async function paginatedProducts(req:Request, res:Response){
    try {

         
        
       

        let gotProducts = (await dbInstance.exec('paginateProducts',{num: +req.params.num})).recordset[0] as Product[]
        if(gotProducts){
       return res.status(200).json(gotProducts)
        }
        return res.status(404).json({message : "Products not Found"})
    } catch (error:any) {
        return res.status(500).json(error.message)
        
    }

}

export async function filterProducts(req:Request, res:Response){
    try {

        const{max, min, range, name} = req.body
        
        console.log(req.body)

        let gotProducts = (await dbInstance.exec('paginateProducts',{})).recordset[0] as Product[]
        if(gotProducts){
       return res.status(200).json({gotProducts})
        }
        return res.status(404).json({message : "Products not Found"})
    } catch (error:any) {
        return res.status(500).json(error.message)
        
    }

}
