function updateUSD() {
  var input = document.getElementById('btc').value;
  var currentBTCprice = document.getElementById('btc-price').innerHTML;
  document.getElementById('usd').value = input * currentBTCprice;
}

function updateBTC() {
  var input = document.getElementById('usd').value;
  var currentBTCprice = document.getElementById('btc-price').innerHTML;
  document.getElementById('btc').value = input / currentBTCprice;
}
