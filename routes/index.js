const express = require('express');
const router = express.Router();
const CryptoJS = require("crypto-js");

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Expression Nagga' });
});

router.post('/encodeInput', (req, res) => {
  let method = req.body.method;
  let wordArray = CryptoJS.enc.Utf8.parse(req.body.text);
  let encoded = CryptoJS.enc.Base64.stringify(wordArray);
  res.send(JSON.stringify(encoded));
});

router.post('/decodeInput', (req, res) => {
  let method = req.body.method;
  let wordArray = CryptoJS.enc.Base64.parse(req.body.text);
  let decoded = CryptoJS.enc.Utf8.stringify(wordArray);
  res.send(JSON.stringify(decoded));
});

module.exports = router;
