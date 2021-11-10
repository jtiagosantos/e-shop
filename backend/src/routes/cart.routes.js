const express = require('express');
const route = express.Router();

const CartController = require('../controllers/CartController');
const verifyToken = require('../middlewares/verifyToken');

route.post('/cart/add_product/:file_id', verifyToken, CartController.addProduct);
route.get('/cart/read_products', verifyToken, CartController.readProducts);
route.put('/cart/update_product/:id', verifyToken, CartController.updateProduct);
route.delete('/cart/delete_product/:id', verifyToken, CartController.deleteProduct);

module.exports = route;