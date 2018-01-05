"use strict";

console.log("I'm a visible app!");

var visibility = false;

var appTest = document.getElementById('app');

var onToggle = function onToggle() {
  visibility = !visibility;
  render();
};

var render = function render() {
  var jsx = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Visibility Toggle"
    ),
    React.createElement(
      "button",
      { onClick: onToggle },
      visibility ? "Hide details" : "Show details"
    ),
    visibility && React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        "Heya, there are some details you can see now!"
      )
    )
  );

  ReactDOM.render(jsx, appTest);
};

render();
