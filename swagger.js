const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API Title',
      version: '1.0.0',
      description: 'Documentation for your API endpoints',
    },
  },
  apis: ['./routes/*.js'], // Path to the API route files
};

const specs = swaggerJsdoc(options);

const router = express.Router();
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(specs));

module.exports = router;
