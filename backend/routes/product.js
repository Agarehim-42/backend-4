// MVC Model View Controller
// Middleware

import express from "express"
// router maarsrutu yaradir

const router = express.Router()

// Mehsullar ucun controller
import { getProducts , getProductDetails, updateProduct, deleteProduct } from "../controller/productController.js";

// Middleware arasdir
// get READ , post CREATE , put UPDATE , delete DELETE

// login registerde post 
router.get("/products" , getProducts)
router.get("/products/:id" , getProductDetails )
router.put("/products/:id" , updateProduct)
// router router seviyyesinde middleware (ara katman proqram)
router.delete("/products/:id" , deleteProduct)

// router.delete burda http requestdir RestFul API

export default router