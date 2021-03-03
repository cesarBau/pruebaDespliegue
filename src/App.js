import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const url = 'https://rickandmortyapi.com/api/episode'
  const [todos, setTodos] = useState()
  const consumo = async() =>{
    const responde = await fetch(url)
    const respondeJson = await responde.json()
    setTodos(respondeJson)
  }
  useEffect(() => {
    consumo()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Episodios Rick y Morty</h1>
        <ul>
        { !todos ? 'Cargando...' :
            todos.results.map((todo, index) => {
              return <li>{todo.name}</li>
            })
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
