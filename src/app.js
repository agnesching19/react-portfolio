console.log('App.js is running!');

// JSX - JavaScript XML

var test = {
  title: 'Indecision App',
  subtitle: 'All you need is code!'
};

var template = (
  <div>
    <h1>{test.title}</h1>
    <p>{test.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
  name: 'Agnes Ching',
  age: 30,
  location: 'London'
};

var templateTwo = (
  <div>
    <h1>{user.name.toUpperCase()}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
