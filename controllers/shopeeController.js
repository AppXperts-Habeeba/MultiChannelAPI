const axios = require('axios');
const crypto = require('crypto');

const authorizeStore = async (req, res) => {
    try {
        const { partnerId, partnerKey, host, path, redirectUrl } = req.query;

        if (!partnerId || !partnerKey || !host || !path || !redirectUrl) {
            return res.status(400).send('Missing required parameters.');
        }

        const timest = Math.floor(Date.now() / 1000);
        const tmpBaseString = `${partnerId}${path}${timest}`;

        let sign = '';
        try {
            const baseString = Buffer.from(tmpBaseString, 'utf8');
            const hmac = crypto.createHmac('sha256', partnerKey);
            hmac.update(baseString);
            sign = hmac.digest('hex');
        } catch (e) {
            console.error(e.message);
            throw new Error('Error creating HMAC signature');
        }

        const url = `${host}${path}?partner_id=${partnerId}&timestamp=${timest}&sign=${sign}&redirect=${encodeURIComponent(redirectUrl)}`;

        res.json({ url }); // Return the URL to the client
    } catch (error) {
        console.error('Error authorizing store:', error);
        res.status(500).send('Error authorizing store.');
    }
};

const accesstoken = async (req, res) => {
    try {
        const { partnerId, partnerKey, code, shopid, host, path } = req.query;

        if (!partnerId || !partnerKey || !code || !shopid || !host || !path) {
            return res.status(400).send('Missing required parameters.');
        }

        const timest = Math.floor(Date.now() / 1000);
        const tmpBaseString = `${partnerId}${path}${timest}`;

        let sign = '';
        try {
            const partner_key = Buffer.from(partnerKey, 'utf8');
            const baseString = Buffer.from(tmpBaseString, 'utf8');
            const hmac = crypto.createHmac('sha256', partnerKey);
            hmac.update(baseString);
            sign = hmac.digest('hex');
        } catch (e) {
            console.error(e.message);
            throw new Error('Error creating HMAC signature');
        }

        const url = `${host}${path}?partner_id=${parseInt(partnerId, 10)}&sign=${sign}&timestamp=${timest}`;

        const data = {
            code: code,
            partner_id: parseInt(partnerId, 10),
            shop_id: parseInt(shopid, 10)
        };

        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        res.json(response.data); // Return the response from the API
    } catch (error) {
        console.error('Error authorizing store:', error);
        res.status(500).send('Error authorizing store.');
    }
};

const getAccessToken = async (req, res) => {
    try {
        const { partnerId, partnerKey, refreshToken, shopId, host, path } = req.query;

        if (!partnerId || !partnerKey || !refreshToken || !shopId || !host || !path) {
            return res.status(400).send('Missing required parameters.');
        }

        const timestamp = Math.floor(Date.now() / 1000);
        const baseString = `${partnerId}${path}${timestamp}`;

        const hmac = crypto.createHmac('sha256', partnerKey);
        hmac.update(Buffer.from(baseString, 'utf8'));
        const sign = hmac.digest('hex');

        const url = `${host}${path}?partner_id=${partnerId}&sign=${sign}&timestamp=${timestamp}`;
        console.log(url);

        const data = {
            partner_id: parseInt(partnerId, 10),
            refresh_token: refreshToken,
            shop_id: parseInt(shopId, 10)
        };

        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        res.json(response.data);
        console.log(response.data);
    } catch (error) {
        console.error('Error getting access token:', error);
        res.status(500).send('Error getting access token.');
    }
};

module.exports = {
    authorizeStore,
    accesstoken,
    getAccessToken,
    // Add other controller functions as needed
};
