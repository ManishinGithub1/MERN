import express from "express";
import mongoose from "mongoose";
import Product from "../model/Product.js";
import { deleteProduct, createProduct, getProducts, updateProduct } from "../controller/product.controller.js";


const routes=express.Router();
routes.get('/',getProducts);
routes.post('/',createProduct);   

routes.delete('/:id',deleteProduct); 
routes.put('/:id',updateProduct);

export default routes;