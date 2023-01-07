const express = require('express');
const router = express.Router();
const {getAllProducts, getProductById} = require('../controller/productController')

//Get all products from DB
router.get('/', getAllProducts)

//Get a product by id from DB
router.get('/:id', getProductById)

module.exports = router;