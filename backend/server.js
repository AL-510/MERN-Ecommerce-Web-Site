require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const productRoutes = require('./routes/productRoutes');

const app = express();



mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(4000);
    console.log('db connected')
})
.catch((err) => {
    console.log(err)
})

app.use(express.json())

app.use('/api/products', productRoutes);

