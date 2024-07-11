const express = require('express');
const router = express.Router();
const shopeeController = require('../controllers/shopeeController');

/**
 * @swagger
 * tags:
 *   - name: Shopee
 *     description: API for Shopee platform
 */

/**
 * @swagger
 * /shopee/auth:
 *   get:
 *     summary: Authorize store for Shopee
 *     tags: [Shopee]
 *     parameters:
 *       - in: query
 *         name: partnerId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Partner ID
 *       - in: query
 *         name: partnerKey
 *         required: true
 *         schema:
 *           type: string
 *         description: Partner Key
 *       - in: query
 *         name: host
 *         required: true
 *         schema:
 *           type: string
 *         description: Host URL
 *       - in: query
 *         name: path
 *         required: true
 *         schema:
 *           type: string
 *         description: API path
 *       - in: query
 *         name: redirectUrl
 *         required: true
 *         schema:
 *           type: string
 *         description: Redirect URL
 *     responses:
 *       200:
 *         description: Authorization URL has been opened
 *       400:
 *         description: Missing required parameters
 *       500:
 *         description: Error authorizing store
 */
router.get('/auth', shopeeController.authorizeStore);
/**
 * @swagger
 * /shopee/accesstoken:
 *   get:
 *     summary: Get access token for Shopee
 *     tags: [Shopee]
 *     parameters:
 *       - in: query
 *         name: partnerId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Partner ID
 *       - in: query
 *         name: partnerKey
 *         required: true
 *         schema:
 *           type: string
 *         description: Partner Key
 *       - in: query
 *         name: code
 *         required: true
 *         schema:
 *           type: string
 *         description: Authorization code
 *       - in: query
 *         name: shopid
 *         required: true
 *         schema:
 *           type: integer
 *         description: Shop ID
 *       - in: query
 *         name: host
 *         required: true
 *         schema:
 *           type: string
 *         description: Host URL
 *       - in: query
 *         name: path
 *         required: true
 *         schema:
 *           type: string
 *         description: API path
 *     responses:
 *       200:
 *         description: Access token retrieved
 *       400:
 *         description: Missing required parameters
 *       500:
 *         description: Error retrieving access token
 */
router.get('/accesstoken', shopeeController.accesstoken);

/**
 * @swagger
 * /shopee/getAccessToken:
 *   post:
 *     summary: Get access token for Shopee
 *     tags: [Shopee]
 *     parameters:
 *       - in: query
 *         name: partnerId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Partner ID
 *       - in: query
 *         name: partnerKey
 *         required: true
 *         schema:
 *           type: string
 *         description: Partner Key
 *       - in: query
 *         name: refreshToken
 *         required: true
 *         schema:
 *           type: string
 *         description: Refresh Token
 *       - in: query
 *         name: shopId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Shop ID
 *       - in: query
 *         name: host
 *         required: true
 *         schema:
 *           type: string
 *         description: Host URL
 *       - in: query
 *         name: path
 *         required: true
 *         schema:
 *           type: string
 *         description: API path
 *     responses:
 *       200:
 *         description: Access token retrieved
 *       400:
 *         description: Missing required parameters
 *       500:
 *         description: Error retrieving access token
 */
router.post('/getAccessToken', shopeeController.getAccessToken);

module.exports = router;

//test
