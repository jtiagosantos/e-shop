const { syncRedisGet, syncRedisSet } = require('../../redis/config');

const Product = require('../models/Product');

class ProductController {
  async createProduct(req, res) {
    const body = req.body;

    try {
      const product = await new Product(body).save();
      await syncRedisSet('products', '');
      res.status(200).json({ error: false, product });
    } catch(error) {
      res.status(500).json({ error: error.message });
    }
  };

  async readProducts(req, res) {
    try {
      const products = await syncRedisGet('products');

      if(!products) {
        const products = await Product.find();
        await syncRedisSet('products', JSON.stringify(products));
        return res.status(200).json({ products });
      }

      res.status(200).json({ products: JSON.parse(products) });      
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
      
      await syncRedisSet('products', '');
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

      if(productUpdated) res.status(200).json({ error: false, message: 'Product updated!', product: productUpdated });
      else res.status(404).json({ error: false, message: 'Product not found!' });

      await syncRedisSet('products', '');
    } catch(error) {
      res.status(500).json({ error: error.message });
    }
  };
};

module.exports = new ProductController();