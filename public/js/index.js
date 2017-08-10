var numeral = require('numeral');

var value = numeral(1000).format('$0,0.00');
console.log('I would pay' + value +' to you. ');
