const express = require('express');
const router = express.Router();

// Example route definition
router.get('/', (req, res) => {
    res.send('Hello from Lazada route!');
});

module.exports = router;
