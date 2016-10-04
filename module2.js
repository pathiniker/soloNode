function toUSD(number) {
  var usd = number.toFixed(2);
  var amount = '$' + usd;
  return amount;
}
module.exports = toUSD;
