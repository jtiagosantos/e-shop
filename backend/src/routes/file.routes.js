const express = require('express');
const route = express.Router();

const FileController = require('../controllers/FileController');
const upload = require('../middlewares/upload');
const verifyToken = require('../middlewares/verifyToken');

route.post('/upload_file/:product_id', upload.single('image'), FileController.uploadFile);
route.get('/files', FileController.index);
route.get('/files/:id', FileController.read);
route.delete('/delete_file/:id', verifyToken, FileController.delete);

module.exports = route;