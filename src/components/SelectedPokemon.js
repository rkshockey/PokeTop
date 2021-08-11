import axios from 'axios'
import React, { useState, useEffect } from 'react'

const initialDetails = {

}

const initialEvo = {

}

function SelectedPokemon (props){
    const { pokemon } = props
    const [pokeDetails, setPokeDetails] = useState(initialDetails)
    const [pokeEvo, setPokeEvo] = useState(initialEvo)

    useEffect(async () => {
        await axios.call(pokemon.species.url)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }, [pokemon])

    return (
        <div className='selected-pokemon'>
            <h2>{pokemon.name}</h2>
        </div>
    )
}

export default SelectedPokemon