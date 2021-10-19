const express = require('express');
const route = express.Router();

const AddressController = require('../controllers/AddressController');
const verifyToken = require('../middlewares/verifyToken');

route.get('/address/index', verifyToken, AddressController.index);
route.post('/address/new', verifyToken, AddressController.create);
route.put('/address/update/:id', verifyToken, AddressController.update);
route.delete('/address/delete/:id', verifyToken, AddressController.delete);

module.exports = route;