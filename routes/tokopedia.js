const express = require('express');
const router = express.Router();
const tokopediaController = require('../controllers/tokopediaController');

// Define Tokopedia API routes
router.get('/products', tokopediaController.getProducts);
router.post('/orders', tokopediaController.createOrder);
// Add more routes as needed

module.exports = router;
