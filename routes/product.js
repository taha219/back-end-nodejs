const express=require('express')
const User = require('../models/product'); // Corrected path and capitalization

const router =express.Router()
/////////////////////////////////////////////////
// crud product model 
/////////////////////////////////////////////////
//add product
router.post('/addProduct', async (req, res) => {
    try {
        dataa = req.body
        prod = new Product(dataa)
        savedprod = await prod.save()
        res.send(savedprod)
    } catch (error) {
        res.status(500).send(error.message)
    }
})
////////////////////////////////////////////////
//get all product
router.get('/getallproducts', async (req, res) => {
    try {
        allproducts = await Product.find()
        res.send(allproducts)
    } catch (error) {
        res.status(500).send(error.message)
    }
})
/////////////////////////////////////////////////
//get by id
router.get('/getProductById/:id', async (req, res) => {
    try {
        id = req.params.id
        productbyid = await Product.find({ _id: id })
        res.send(productbyid)
    } catch (error) {
        res.status(500).send(error.message)
    }
})
/////////////////////////////////////////////////
//delete by id
router.delete('/deleteproduct/:id', async (req, res) => {
    try {
        myid = req.params.id
        deletedproduct = await Product.findByIdAndDelete({ _id: myid })
        res.send(deletedproduct)
    } catch (error) {
        res.status(500).send(error.message)
    }
})
/////////////////////////////////////////////////
//update product
router.put('/updateproduct/:id', async (req, res) => {
    try {
        myid = req.params.id
        reqdata = req.body
        productafterupdate =await Product.findByIdAndUpdate({ _id: myid },)
        res.send(productafterupdate)
    } catch (error) {
        res.status(500).send(error.message)
    }
})



module.exports=router