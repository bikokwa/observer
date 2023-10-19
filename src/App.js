import logo from "./logo.svg";
import "./App.css";
import { store } from "./store";
import { useStore } from "./useStore";

const Text = () => {
  const count = useStore(-1);

  return <h1>{count}</h1>;
};

function App() {
  return (
    <div className="App">
      <button onClick={(e) => store.increment()}>Increment the count</button>
      <header className="App-header">
        <Text />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
