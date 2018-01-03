const add = (a, b) => {
  return a + b;
};

console.log(add(55, 1));

// this keywprd - no longer bound

const user = {
  name: 'Agnes',
  cities: ['London', 'Brussels', 'Taipei'],

  printPlaceLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};

console.log(user.printPlaceLived());

// Challenge below

const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,

  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
