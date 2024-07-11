const express = require('express');
const app = express();
const swaggerSetup = require('./swagger');

// Use Swagger middleware
app.use('/', swaggerSetup);

// Other middleware and routes
const shopeeRoutes = require('./routes/shopee');
app.use('/shopee', shopeeRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
