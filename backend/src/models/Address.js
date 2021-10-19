const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  logradouro: {
    type: String,
    required: true
  },
  numero: {
    type: Number,
    required: true,
  },
  bairro: {
    type: String,
    required: true
  },
  cidade: {
    type: String,
    required: true
  },
  uf: {
    type: String,
    required: true
  },
  cep: {
    type: String,
    required: true
  },
  created_at: { 
    type: Date, 
    default: new Date()
  },
  update_at: { 
    type: Date, 
    default: new Date()
  }
});

const Address = mongoose.model('Address', AddressSchema);

module.exports = Address;