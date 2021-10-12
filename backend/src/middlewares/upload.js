const multer = require('multer');
const path = require('path');

const upload = multer({
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '../../public/uploads'),
    filename: (req, file, callback) => callback(null, file.originalname)
  })
});

module.exports = upload;