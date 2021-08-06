import React from 'react'
import { useAxiosState } from '../hooks/axiosHooks'

import PokeCard from './PokeCard'

const pokeURL = 'https://pokeapi.co/api/v2/pokemon?limit=151'

function PokeCards () {
    const [pokemon, setPokemon] = useAxiosState(pokeURL)

    if (!pokemon){
        return (
            <div>Loading...</div>
        )
    }
    return (
        <div className='pokecards'>
            {pokemon.map(poke => <PokeCard name={poke.name} url={poke.url} />)}
        </div>
    )
}

export default PokeCards