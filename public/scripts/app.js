'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML

var test = {
  title: 'Indecision App',
  subtitle: 'All you need is code!'
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    test.title
  ),
  React.createElement(
    'p',
    null,
    test.subtitle
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var user = {
  name: 'Agnes Ching',
  age: 30,
  location: 'London'
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name.toUpperCase()
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    user.location
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
