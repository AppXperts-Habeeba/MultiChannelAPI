const express = require('express');
const router = express.Router();
const amazonSGController = require('../controllers/amazonSGController');

// Define Amazon SG API routes
router.get('/products', amazonSGController.getProducts);
router.post('/orders', amazonSGController.createOrder);
// Add more routes as needed

module.exports = router;
