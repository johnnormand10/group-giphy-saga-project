const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

const router = express.Router();

// Express Routes
router.get (`/`, (req, res) => {
    console.log('req.body:', req.params);
    axios({
        method: 'GET',
        url: 'https://api.giphy.com/v1/gifs/search',
        params: {
            api_key: process.env.GIPHY_API_KEY,
            q: req.body.data,
            rating: 'pg'
        }
    })
    .then((apiRes) => {
        res.send(apiRes.data.data);
        console.log(apiRes.data.data);
    })
    .catch((err) => {
        console.error('', err);
        res.sendStatus(500);
    })
});

module.exports = router;
