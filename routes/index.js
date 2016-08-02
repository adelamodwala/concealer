const express = require('express');
const router = express.Router();
const CryptoJS = require("crypto-js");

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Expression Nagga' });
});

router.post('/encodeBase64', (req, res) => {
  console.log(req.body.text);
  let wordArray = CryptoJS.enc.Utf8.parse(req.body.text);
  let encoded = CryptoJS.enc.Base64.stringify(wordArray);
  console.log(encoded);
  res.send(JSON.stringify(encoded));
});

module.exports = router;
