const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  inventory: {
    type: Number,
    required: true
  },
  description: {
    type: String,
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

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;