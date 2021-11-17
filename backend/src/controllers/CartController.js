const Cart = require('../models/Cart');

class CartController {
  async addProduct(req, res) {
    const body = req.body;
    const { file_id } = req.params;
    
    body.user_id = req.userId;
    body.file_id = file_id;

    try {
      const product = await new Cart(body).save();
      res.status(200).json(product);
    } catch(error) {
      res.status(500).json({ error: error.message });
    }
  };

  async readProducts(req, res) {
    try {
      const products = await Cart.find({ user_id: req.userId }).populate(
        'file_id', 
        'filename'
      )
      res.status(200).json(products);
    } catch(error) {
      res.status(500).json({ error: error.message });
    }
  };

  async updateProduct(req, res) {
    const { id } = req.params;
    const body = req.body;

    body.updated_at = new Date();

    try {
      const productUpdated = await Cart.findByIdAndUpdate(id, body, { new: true });
      res.status(200).json(productUpdated);
    } catch(error) {
      res.status(500).json({ error: error.message });
    }
  };

  async deleteProduct(req, res) {
    const { id } = req.params;

    try {
      const product = await Cart.findByIdAndDelete(id);
      if(product) res.status(200).json({ message: 'Deleted product in cart!' });
      else res.status(404).json({ error: true, message: 'Product not found!' });
    } catch(error) {
      res.status(500).json({ error: error.message });
    }
  };

  async resumeCart(req, res) {
    try {
      const products = await Cart.find({ user_id: req.userId });
      let total = 0;

      for(let product of products) {
        total += (product.price * product.quantity);
      }

      res.status(200).json(total);
    } catch(error) {
      res.status(500).json({ error: error.message });
    }
  };
};

module.exports = new CartController();