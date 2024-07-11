const express = require('express');
const router = express.Router();

const shopeeRoutes = require('./shopee');
//const lazadaRoutes = require('./lazada');
//const amazonSGRoutes = require('./amazonSG');
//const tokopediaRoutes = require('./tokopedia');

// Route middleware for each platform
router.use('/shopee', shopeeRoutes);
//router.use('/lazada', lazadaRoutes);
//router.use('/amazonSG', amazonSGRoutes);
//router.use('/tokopedia', tokopediaRoutes);

module.exports = router;
