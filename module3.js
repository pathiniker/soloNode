var randomNumber = require('./moduleOne');
var toUSD = require('./moduleTwo');

var allTogether = {
  account: function() {
    return 'Account balance: \n';
  },
  oneAndTwo: function() {
    var cash = toUSD(randomNumber(100,1000000));
    return cash;
  }

};

module.exports = allTogether;
