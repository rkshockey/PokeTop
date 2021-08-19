import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

function PokedexEntry (props){
    const {poke} = props
    const url = `/pokedex/${poke.index}`

    function evolution (){
        if (!poke.evolution.complex){
            return poke.evolution.species.map(item => <p className={item === poke.species ? 'bold' : ''}>{item}</p>)
        }
    }

    return <Link to={url}>
        <div className='pokedex-entry'>
            <img src={poke.picture.normal} alt={poke.species}/>
            {evolution()}
        </div>
    </Link>
}

export default PokedexEntry