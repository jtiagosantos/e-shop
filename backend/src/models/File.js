const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
  product_id: {
    type: mongoose.Types.ObjectId,
    ref: 'Product'
  },
  filename: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: new Date()
  }
});

const File = mongoose.model('File', FileSchema);

module.exports = File;