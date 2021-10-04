const express = require('express');
require('./database');

const userRoutes = require('./src/routes/user.routes');
const productRoutes = require('./src/routes/product.routes');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/v1', userRoutes);
app.use('/api/v1', productRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));