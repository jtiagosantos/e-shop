const Produtc = require('../models/Product');

class ProductController {
  async createProduct(req, res) {
    const body = req.body;

    try {
      const product = await new Produtc(body).save();
      res.status(200).json({ error: false, product });
    } catch(error) {
      res.status(500).json({ error: error.message });
    }
  };

  async readProducts(req, res) {
    try {
      const products = await Produtc.find();
      res.status(200).json({ products });
    } catch(error) {
      res.status(500).json({ error: error.message });
    }
  };

  async deleteProduct(req, res) {
    const { id } = req.params;

    try {
      await Produtc.findByIdAndDelete(id);
      res.status(200).json({ error: false, message: 'Product deleted!' });
    } catch(error) {
      res.status(500).json({ error: error.message });
    }
  };

  async updateProduct(req, res) {
    const { id } = req.params;
    const body = req.body;

    try {
      const productUpdated = await Produtc.findByIdAndUpdate(id, body, { new: true });
      res.status(200).json({ error: false, message: 'Product updated!', productUpdated });
    } catch(error) {
      res.status(500).json({ error: error.message });
    }
  };
};

module.exports = new ProductController();