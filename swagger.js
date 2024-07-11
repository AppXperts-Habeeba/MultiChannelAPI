const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'API documentation for the project',
    },
    tags: [
      {
        name: 'Shopee',
        description: 'API for Shopee platform',
      },
      {
        name: 'Lazada',
        description: 'API for Lazada platform',
      },
      {
        name: 'AmazonSG',
        description: 'API for Amazon SG platform',
      },
      {
        name: 'Tokopedia',
        description: 'API for Tokopedia platform',
      },
    ],
  },
  apis: ['./routes/*.js'], // Paths to files containing OpenAPI definitions
};

const specs = swaggerJsDoc(options);



module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
