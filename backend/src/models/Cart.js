const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
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