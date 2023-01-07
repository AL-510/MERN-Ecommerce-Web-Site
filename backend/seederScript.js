require('dotenv').config();

const productsData = require('./data/products');
const mongoose = require('mongoose');
const Product = require('./models/Product');
const products = require('./data/products');



mongoose.connect(process.env.MONGO_URI)
.then(() => {
    
    console.log('db connected')
})
.catch((err) => {
    console.log(err)
})

const importData = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(productsData);

        console.log("Data Import Success");
        process.exit();
    } catch (error) {
        console.log("Error with data import")
        process.exit(1);
    }
};

importData();

