const File = require('../models/File');

class FileController {
  async uploadFile(req, res) {
    const { product_id } = req.params;

    try {
      const file = req.file;
      const imageFile = await new File({
        product_id,
        filename: file.originalname,
      }).save();

      res.status(200).json({ imageFile });
    } catch(error) {
      res.status(500).json({ error: error.message });
    }
  };

  async index(req, res) {
    try {
      const files = await File.find();
      res.status(200).json({ files });
    } catch(error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = new FileController();