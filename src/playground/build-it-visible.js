console.log("I'm a visible app!")

let visibility = false;

const appTest = document.getElementById('app');

const onToggle = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onToggle}>
        {visibility ? "Hide details" : "Show details"}
      </button>
      {visibility && (
        <div>
          <p>Heya, there are some details you can see now!</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(jsx, appTest);
};

render();
