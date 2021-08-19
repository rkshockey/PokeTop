import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { useParams } from 'react-router'

import pokedex, {human} from '../data/pokedex'
import { sizeClass } from '../equations'
import { typeMatch } from '../data/typechart'

const initialPoke = {
    species: null,
    index: null,
    picture: {normal: null, shiny: null},
    type: [null],
    height: null,
    weight: null,
    metricHeight: null,
    catchRate: null,
    evolvesAt: null,
    evolvesTo: null,
    evolution: {
        species: [null],
        complex: false
    },
    baseStats: {
        hp: null,
        att: null,
        def: null,
        spAtt: null,
        spDef: null,
        speed: null
    },
    eggGroup: null,
    rarity: null,
    biomes: null,
}

function PokedexPage (props){
    const {id} = useParams();
    const [pokemon, setPokemon] = useState(initialPoke);
    const {role} = props

    useEffect(() => {
        if (id == 0){
            setPokemon(human)
        }else{
            setPokemon(pokedex.find(item => item.index === Number(id)))
        }
    }, [])

    function evolution (evolution){
        if (evolution.length === 1){
            return <p>
                Evolution chain: {evolution[0]}
            </p>
        }else if (evolution.length === 2){
            return <p>
                Evolution chain: {evolution[0]} to {evolution[1]}
            </p>
        }else{
            return <p>
                Evolution chain: {evolution[0]} to {evolution[1]} to {evolution[2]}
            </p>
        }
    }

    return <div className='pokedex-page'>
        <div className='pokedex-top'>
            <div className='pokedex-pics'>
                <img src={pokemon.picture.normal} alt={pokemon.species} />
                {role === 'master' && <img src={pokemon.picture.shiny} alt={`${pokemon.species} shiny`} />}
            </div>
            <div className='row'>
                <h3>{pokemon.species}</h3>
                <p>Pokedex #{pokemon.index}</p>
                <p>Type: {pokemon.type.map(item => <span>{item} </span>)}</p>
            </div>
            <div className='row'>
                <p>Height: {pokemon.height}</p>
                <p>Weight: {pokemon.weight}</p>
                <p>Size Class: {sizeClass(pokemon.metricHeight)}</p>
            </div>
            <div className='row'>
                {pokemon.evolution.species.length > 1 && <p>Evolves at Level {pokemon.evolvesAt} to {pokemon.evolvesTo}</p>}
                {!pokemon.evolution.complex ? evolution(pokemon.evolution.species) : null}
            </div>
            {role === 'master' && <div className='section'>
                <h4>Base Stats:</h4>
                <div className='row'>
                    <p>HP: {pokemon.baseStats.hp}</p>
                    <p>Attack: {pokemon.baseStats.att}</p>
                    <p>Defense: {pokemon.baseStats.def}</p>
                    <p>Sp.Attack: {pokemon.baseStats.spAtt}</p>
                    <p>Sp.Defense: {pokemon.baseStats.spDef}</p>
                    <p>Speed: {pokemon.baseStats.speed}</p>
                </div>
            </div>}
            {role === 'master' && typeMatch(pokemon.type)}
            <div className='row'>
                <p>Catch Rate: {pokemon.catchRate}</p>
                <p>Biomes: {pokemon.biomes}</p>
                <p>Rarity: {pokemon.rarity}</p>
            </div>
            <div className='row'>
                <p>{pokemon.pokedexEntry}</p>
            </div>
        </div>
    </div>
}

function mapStateToProps (state){
    return ({
        role: state.user.role
    })
}

export default connect(mapStateToProps)(PokedexPage);