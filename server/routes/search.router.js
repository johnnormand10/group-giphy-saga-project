require('dotenv').config();
const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

const router = express.Router();

// Express Routes
router.get (`/`, (req, res) => {
    let newSearch = req.query.q;
    console.log('newSearch in searchRouter is:', newSearch);
    //return all categories
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${newSearch}&api_key=${process.env.GIPHY_API_KEY}&limit=5`)
    
    .then((response) => {
        //checking what data of response is
        console.log('Success! response.data in search router is:', response.data);
        res.send(response.data);
    })
    .catch((err) => {
        console.error('Error in search.router,', err);
        res.sendStatus(500);
    })
});

module.exports = router;
