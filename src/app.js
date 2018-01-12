import React from 'react';
import ReactDom from 'react-dom';

const template = React.createElement('p', {}, 'bello bello');
ReactDom.render(template, document.getElementById('app'));

// import './utils.js';
// import substract, { square, add } from './utils.js';

// console.log('app.js is running');

// console.log(square(5));
// console.log(add(100, 55));
// console.log(substract(18, 4));

// import isSenior, { isAdult, canDrink } from './person.js';

// console.log(isAdult(20));
// console.log(canDrink(17));
// console.log(isSenior(70));
