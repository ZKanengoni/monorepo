import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

function App() {
  const [pokemon, setPokemon] = useState<any>(null);

  useEffect(() => {
    axios.get(baseUrl).then((res) => {
      setPokemon(res.data.results);
    });
  }, []);

  return (
    <div className='App'>
      <h1>Pokemon</h1>
      {pokemon &&
        pokemon.map((poke: any) => <p key={poke.name}>{poke.name}</p>)}
    </div>
  );
}

export default App;
