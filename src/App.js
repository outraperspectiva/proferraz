import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Professor Fábio Ferraz Fernandez
        </p>
        <a
          className="App-link"
          href="https://www.ifb.edu.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Conheça o IFB
        </a>
      </header>
    </div>
  );
}

export default App;
