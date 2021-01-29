import { useState } from 'react';
import api from '../src/services/api'

import { PokemonInfo } from '../src/types/PokemonInfo'



function App() {

  const [pokeName, setPokeName] = useState<string>('')
  const [pokemon, setPokemon] = useState<PokemonInfo>()

  const getAPI = () => {
    api.get(`/${pokeName}`)
    .then(response => setPokemon(response.data))
  }

  console.log(pokemon)

  return (
    <div className="App">
      <div>
        <h1>Pokedex</h1>
        <input type="text" placeholder="name or ID" onChange={(event) => setPokeName(event.target.value)}/>
        <button onClick={getAPI}>Search</button>
      </div>

      <div>
   
        <img src={pokemon?.sprites.front_default} alt=""/>
        <h2>{pokemon?.name}</h2>
        <p>ID: {pokemon?.id}</p>
        <p>Weight: {pokemon?.weight}</p>

        {
          pokemon?.stats.map(i => (
            <p>{i.stat.name}, {i.base_stat}</p>
          ))
        }
        
      </div>
      


    </div>
  );
}

export default App;
