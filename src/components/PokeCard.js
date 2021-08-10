import React from 'react'
import { useAxiosState } from '../hooks/axiosHooks'

const initialPoke = {
    sprites: {
        front_default: null
    },
    types: null
}

function PokeCard (props) {
    const {name, url, setPoke} = props
    const [pokemon, setPokemon] = useAxiosState(url, initialPoke)

    function handleClick (e) {
        e.preventDefault();
        // setPoke(pokemon)
    }

    return (
        <div className='pokecard' onClick={handleClick}>
            <img src={pokemon.sprites.front_default} alt={name} />
            <h3>{name}</h3>
            <p>Types: {pokemon.types.map(item => <span>{item.type.name},</span>)}</p>

        </div>
    )
}

export default PokeCard