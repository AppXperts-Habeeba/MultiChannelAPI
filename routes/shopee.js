/**
 * @swagger
 * /shopee/auth:
 *   get:
 *     summary: Authorize store for Shopee
 *     description: Generates an authorization URL for Shopee API integration.
 *     parameters:
 *       - in: query
 *         name: partnerId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Partner ID for Shopee
 *       - in: query
 *         name: partnerKey
 *         required: true
 *         schema:
 *           type: string
 *         description: Temporary partner key for Shopee
 *       - in: query
 *         name: host
 *         required: true
 *         schema:
 *           type: string
 *         description: Shopee API host URL
 *       - in: query
 *         name: path
 *         required: true
 *         schema:
 *           type: string
 *         description: API path for Shopee authentication
 *       - in: query
 *         name: redirectUrl
 *         required: true
 *         schema:
 *           type: string
 *         description: Redirect URL after authorization
 *     responses:
 *       '200':
 *         description: Authorization URL generated successfully
 */
const express = require('express');
const router = express.Router();
const shopeeController = require('../controllers/shopeeController');

router.get('/auth', shopeeController.authorizeStore);
router.get('/get_access_token', shopeeController.accesstoken);

module.exports = router;
