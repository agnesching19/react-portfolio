'use strict';

var add = function add(a, b) {
  return a + b;
};

console.log(add(55, 1));

// this keywprd - no longer bound

var user = {
  name: 'Agnes',
  cities: ['London', 'Brussels', 'Taipei'],

  printPlaceLived: function printPlaceLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });
  }
};

console.log(user.printPlaceLived());

// Challenge below

var multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,

  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (number) {
      return number * _this2.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());
