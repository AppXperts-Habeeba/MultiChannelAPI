const express = require('express');
const app = express();
const swaggerSetup = require('./swagger');

const shopeeRoutes = require('./routes/shopee');

app.use('/shopee', shopeeRoutes);

swaggerSetup(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
