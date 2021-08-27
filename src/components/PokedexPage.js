import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { useParams } from 'react-router'

import pokedex, {human, initialPoke} from '../data/pokedex'
import { sizeClass, ranges, movement } from '../equations'
import { typeMatch, normal } from '../data/typechart'
import { ability } from '../data/abilitydex'

import Attacks from './Attacks'
import ContestForm from './ContestForm'

function PokedexPage (props){
    const {id} = useParams();
    const [pokemon, setPokemon] = useState(initialPoke);
    const [view, setView] = useState('battle')
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

    return <div className={role === 'master' ? 'pokedex-page' : 'pokedex-page bottom-div'}>
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
                <div className='row'>
                    <h4>Base Stats:</h4>
                </div>
                <div className='row'>
                    <p>HP: {pokemon.baseStats.hp}</p>
                    <p>Attack: {pokemon.baseStats.att}</p>
                    <p>Defense: {pokemon.baseStats.def}</p>
                    <p>Sp.Attack: {pokemon.baseStats.spAtt}</p>
                    <p>Sp.Defense: {pokemon.baseStats.spDef}</p>
                    <p>Speed: {pokemon.baseStats.speed}</p>
                </div>
            </div>}
            {role === 'master' && <div><div className='row'><h4>Type Matchup</h4></div> {typeMatch(pokemon.type)}</div>}
            <div className='row'>
                <p>Catch Rate: {pokemon.catchRate}</p>
                <p>Biomes: {pokemon.biomes}</p>
                <p>Rarity: {pokemon.rarity}</p>
            </div>
            {role === 'master' && <div className='row'>
                {ranges(pokemon.metricHeight)}
                {movement(pokemon.baseStats.speed, 0)}
                <div>
                    <h4>Level Speed</h4>
                    <p>{pokemon.levelSpeed}</p>
                </div>
                <div>
                    <h4>Male : Female</h4>
                    <p>{pokemon.gender}</p>
                </div>
            </div>}
            <div className='row'>
                {pokemon.abilities.map(item => ability(item))}
            </div>
            <div className='row'>
                <p>{pokemon.pokedexEntry}</p>
            </div>
            {role === 'master' && <div>
                <h4>Attack List</h4>
                <ContestForm view={view} setView={setView}/>
                <div className='attacks bottom-div'>
                    {pokemon.moveList.map(item => <Attacks pokedex={true} move={item} role={role} view={view}/>)}
                </div>
            </div>}
        </div>
        
    </div>
}

function mapStateToProps (state){
    return ({
        role: state.user.role
    })
}

export default connect(mapStateToProps)(PokedexPage);