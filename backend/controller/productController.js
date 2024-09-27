// RestFUL API

import Product from "../model/Product.js"

// CREATE READ UPDATE DELETE (CRUD)

export const getProducts = async (req , res) => {
    const products = await Product.find()
    if (!products) {
        return res.status(404).json({
            error: "Mehsullar yoxdur"
        })
    }
    res.status(200).json({
    products
    })
}

// optional chaining 2021 javascript ozelliyi
export const getProductDetails = async (req , res) => {
    const product = await Product.findById(req?.params?.id)

    if(!product) {
        return res.status(404).json({
            error: "Mehsul Tapilmadi"
        })
    }

    res.status(200).json({
        product
    })
}

export const updateProduct = async (req , res) => {
    let product = await Product.findById(req?.params?.id)

    if(!product) {
        return res.status(404).json({
            error: "Mehsul Tapilmadi"
        })
    }

    product = await Product.findByIdAndUpdate(req?.params?.id , req.body , {
        new:true
    })

    res.status(200).json({
        product
    })
}

export const deleteProduct = async (req , res) => {
    const product = await Product.findById(req?.params?.id)

    if(!product) {
        return res.status(404).json({
            error: "Mehsul Tapilmadi"
        })
    }

    await Product.deleteOne()

    res.status(200).json({
        message:"Mehsul ugurla silindi"
    })
}



// delete post put get bunlar http isteyler adlanir .

// req request res response 

// Monolit Mikroservis arxitekturasi
// Uzerinde islediyimiz arxitektura Monolit MVC MOdel View Controller istifade edikrik