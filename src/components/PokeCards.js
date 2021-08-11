import React, { useState } from 'react'
import { useAxiosStateWResults } from '../hooks/axiosHooks'

import PokeCard from './PokeCard'
import SelectedPokemon from './SelectedPokemon'

const pokeURL = 'https://pokeapi.co/api/v2/pokemon?limit=151'

function PokeCards () {
    const [pokemon, setPokemon] = useAxiosStateWResults(pokeURL)
    const [selectedPoke, setSelectedPoke] = useState(null)

    if (!pokemon){
        return <div>Loading...</div>
    }

    return (
        <div className='pokepage'>
            {selectedPoke ? <SelectedPokemon pokemon={selectedPoke} /> : null}
            <div className='pokecards'>
                {pokemon.map(poke => <PokeCard url={poke.url} name={poke.name} key={poke.name} setPoke={setSelectedPoke} />)}
            </div>
        </div>
    )
}

export default PokeCards