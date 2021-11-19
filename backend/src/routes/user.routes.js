const express = require('express');
const route = express.Router();

const UserController = require('../controllers/UserController');

route.post('/register', UserController.register);
route.post('/login', UserController.login);
route.get('/administrators', UserController.index);

module.exports = route;