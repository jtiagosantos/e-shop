const mongoose = require('mongoose');

//adicionar recurso endereco

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean,
    default: false
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

const User = mongoose.model('User', UserSchema);

module.exports = User;