import Product from '../model/Product.js';
import mongoose from 'mongoose';


export const getProducts =  async(req,res)=>{
        try{
            const products=await Product.find({});
            console.log(products)
            res.status(200).json({success:true,data:products});
        }
        catch(error){
            console.log("Error in Fetching Products: ",error.message);  
            res.status(500).json({success:false, message:"Internal Server Error"});
        }
    }

    export const createProduct=async(req,res)=>{
        const product=req.body;
    
        if(!product.name || !product.price || !product.image){
            return res.status(400).json({message: "All fields are required",success:false});
        }
    
        const newProduct= new Product(product);
    
        try{
            await newProduct.save();
            res.status(201).json({success: true, message: "Product added succesfully",data: newProduct});
            console.log(newProduct);
        }
        catch(error){
            console.error("Error in create Product: ",error.message);
            res.status(500).json({success:false,message:"Internal Server Error"});
        }
    }

    export const deleteProduct=async(req,res)=>{
        const {id}=req.params;
        try{
            await Product.findByIdAndDelete(id);
            res.status(200).json({success:true, message: "Product deleted successfully"});
        }
        catch(error){
            console.error("Error in Delete Product: ",error.message);
            res.status(404).json({success:false,message:"Product not found"});
        }
    }

    export const updateProduct= async(req,res)=>{
        const {id}=req.params;
        const product=req.body;
    
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).send("No Product with that id"); 
        }
        try{
            const updateProduct=await Product.findByIdAndUpdate(id,product,{new:true});
            res.status(200).json({success:true,message:"Product updated successfully",data:updateProduct});
        }
        catch(error){
            console.error("Error in Update Product: ",error.message);
            res.status(500).json({success:false,message:"Interenal Server Error"});
        }
    }