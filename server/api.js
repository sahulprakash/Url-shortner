const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const URL = require('../models/url')
var shortUrl = require('node-url-shortener');
const connectionURL = 'mongodb://localhost:27017/freegodb';
mongoose.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true })

router.post('/urlLink', (req, res) => {
    shortUrl.short(req.body.urlData, function (err, url) {
        res.send(url)
    });
})

module.exports = router;