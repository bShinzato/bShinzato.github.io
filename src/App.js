import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Brandon Shinzato</h1>
        <h2>About Me</h2>
        <p>I like to do a lot of things! Maybe we have Similarities?!</p>
        <ul>
            <li>Fishing</li>
            <li>Netflix</li>
            <li>Driving</li>
        </ul>
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
