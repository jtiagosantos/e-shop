const express = require('express');
const route = express.Router();

const ProductController = require('../controllers/ProductController');
const verifyToken = require('../middlewares/verifyToken');

route.post('/create_product', ProductController.createProduct);
route.get('/read_products', verifyToken, ProductController.readProducts);
route.delete('/delete_product/:id', verifyToken, ProductController.deleteProduct);
route.put('/update_product/:id', verifyToken, ProductController.updateProduct);

module.exports = route;