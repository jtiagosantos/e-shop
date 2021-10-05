const Product = require('../models/Product');

class ProductController {
  async createProduct(req, res) {
    const body = req.body;

    try {
      const product = await new Product(body).save();
      res.status(200).json({ error: false, product });
    } catch(error) {
      res.status(500).json({ error: error.message });
    }
  };

  async readProducts(req, res) {
    try {
      const products = await Product.find();
      res.status(200).json({ products });
    } catch(error) {
      res.status(500).json({ error: error.message });
    }
  };

  async deleteProduct(req, res) {
    const { id } = req.params;

    try {
      const product = await Product.findByIdAndDelete(id);
      if(product) res.status(200).json({ error: false, message: 'Product deleted!' });
      else res.status(404).json({ error: false, message: 'Product not found!' });
    } catch(error) {
      res.status(500).json({ error: error.message });
    }
  };

  async updateProduct(req, res) {
    const { id } = req.params;
    const body = req.body;
    
    body.updated_at = new Date();

    try {
      const productUpdated = await Product.findByIdAndUpdate(id, body, { new: true });
      res.status(200).json({ error: false, message: 'Product updated!', product: productUpdated });
    } catch(error) {
      res.status(500).json({ error: error.message });
    }
  };
};

module.exports = new ProductController();