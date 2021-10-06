const express = require('express');
require('./database/config');

const userRoutes = require('./src/routes/user.routes');
const productRoutes = require('./src/routes/product.routes');
const cartRoutes = require('./src/routes/cart.routes');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/v1', userRoutes);
app.use('/api/v1', productRoutes);
app.use('/api/v1', cartRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));