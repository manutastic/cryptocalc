var express = require('express');
var router = express.Router();
var request = require('request');
const Gdax = require('gdax');

const publicClient = new Gdax.PublicClient();
const apiKey = '';

var currentBTCprice;

function updateBTC() {
  var input = document.fieldset.forms[0].usd;
  document.fieldset.forms[0].btc = currentBTCprice * input;
}

publicClient.getProductTicker('BTC-USD', function(err, response, data) {
  if (err) {
    console.log(err);
    return;
  }
  currentBTCprice = data.price;
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'CryptoCalc',
    BTCprice: currentBTCprice
  });
});

router.post('/', function (req, res) {
  res.render('index', { title: 'CryptoCalc' });
  console.log(req.body.amount);
})

module.exports = router;
