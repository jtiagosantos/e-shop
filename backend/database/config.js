const mongoose = require('mongoose');

mongoose.connect('mongodb://db:27017/eshop', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Mongodb successfully connected!'))
  .catch(error => console.log(`Error connecting with Mongodb!\n ${error}`));