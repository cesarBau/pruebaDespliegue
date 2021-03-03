import logo from './logo.svg';
import './App.css';
import Api from './fetch'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>PRECIO BITCOIN</h1>
        <Api/>
        <p>Fuente: coindesk</p>
      </header>
    </div>
  );
}

export default App;
