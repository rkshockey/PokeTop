import React, { useState } from 'react'
import { useAxiosStateWResults } from '../hooks/axiosHooks'

import PokeCard from './PokeCard'
import SelectedPokemon from './SelectedPokemon'

const pokeURL = 'https://pokeapi.co/api/v2/pokemon?limit=151'

function PokeCards () {
    const [pokemon, setPokemon] = useAxiosStateWResults(pokeURL)
    const [selectedPoke, setSelectedPoke] = useState(null)

    return (
        <div className='pokepage'>
            {selectedPoke ? <SelectedPokemon pokemon={selectedPoke} /> : <div></div>}
            <div className='pokecards'>
                {pokemon.map(poke => <PokeCard url={poke.url} name={poke.name} key={poke.name} />)}
            </div>
        </div>
    )
}

export default PokeCards