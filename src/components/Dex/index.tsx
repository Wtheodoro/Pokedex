import React, { useState } from 'react';
import api from '../../services/api'

import { PokemonInfo } from '../../types/PokemonInfo'

import '../../styles/dex.css'
import Tilt from 'react-parallax-tilt'


function Dex() {

  const [pokeName, setPokeName] = useState<string>('')
  const [pokemon, setPokemon] = useState<PokemonInfo>()

  const getAPI = () => {
    if (pokeName !== undefined) {
      api.get(`/${pokeName}`)
        .then(response => setPokemon(response.data))
    } 
  }

  console.log(pokemon)

  return (
        <>
          <div className="top">
            <h1>Pokedex</h1>
            <input type="text" placeholder="name or ID" onChange={(event) => setPokeName(event.target.value)}/>
            <button onClick={getAPI}>Search</button>
          </div>

          <Tilt className="container">
            <div className="box">
            {pokemon &&
            <>
            <h2 className="name">{pokemon?.name}</h2>
            <div className="circle"></div>
            <img src={pokemon?.sprites.front_default} alt={pokemon.name} className="sprite"/>
            <p className="id"># {pokemon?.id}</p>            
            </>
            }
            </div>
            <div className="box-stat">
            <p>Weight: {pokemon?.weight}</p>
            {
              pokemon?.stats.map(i => (
                <p>{i.stat.name}: {i.base_stat}</p>
              ))
            }
          </div>
          </Tilt>     
    </>
  );
}

export default Dex;
