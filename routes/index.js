const express = require('express');
const router = express.Router();
import ConversionService from '../service/ConversionService';

const conversionService = new ConversionService();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Concealer' });
});

router.post('/concealInput', (req, res) => {
  let concealed = conversionService.concealInput(req.body.text, req.body.secretKey, req.body.method);
  res.json(concealed);
});

router.post('/revealInput', (req, res) => {
  let method = req.body.method;

  let revealed = conversionService.revealInput(req.body.text);

  res.json(revealed);
});

module.exports = router;
