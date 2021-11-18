const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  file_id: {
    type: mongoose.Types.ObjectId,
    ref: 'File'
  },
  product_id: {
    type: mongoose.Types.ObjectId,
    ref: 'Product'
  },
  quantity: {
    type: Number,
    required: true
  },
  created_at: { 
    type: Date, 
    default: new Date()
  },
  updated_at: { 
    type: Date, 
    default: new Date()
  }
});

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;