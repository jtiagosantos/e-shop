const express = require('express');
const route = express.Router();

const ProductController = require('../controllers/ProductController');

route.post('/create_product', ProductController.createProduct);
route.get('/read_products', ProductController.readProducts);
route.delete('/delete_product/:id', ProductController.deleteProduct);
route.put('/update_product/:id', ProductController.updateProduct);

module.exports = route;