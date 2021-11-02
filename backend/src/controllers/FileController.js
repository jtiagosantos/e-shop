const { syncRedisGet, syncRedisSet } = require("../../redis/config");
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

      await syncRedisSet('files', '');

      res.status(200).json({ imageFile });
    } catch(error) {
      res.status(500).json({ error: error.message });
    }
  };

  async index(req, res) {
    try {
      const files = await syncRedisGet('files');

      if(!files) {
        const files = await File.find().populate(
          'product_id',
          'name price inventory description'
        ).sort({ _id: -1 });
        await syncRedisSet('files', JSON.stringify(files));
        res.status(200).json(files);
      }

      res.status(200).json(JSON.parse(files));
    } catch(error) {
      res.status(500).json({ error: error.message });
    }
  }

  async read(req, res) {
    try {
      const { id } = req.params;

      const file = await File.find({ _id: id }).populate(
        'product_id',
        'name price inventory description'
      );
      if(file) res.status(200).json(file)
      else res.status(404).json('Product not found!');
    } catch(error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const file = await File.findByIdAndDelete(id);

      if(file) res.status(200).json({ error: false, message: 'deleted file' });
      else res.status(404).json({ error: false, message: 'product not found' });

      await syncRedisSet('files', '')

    } catch(error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = new FileController();