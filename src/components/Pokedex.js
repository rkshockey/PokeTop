import React from 'react'
import {connect} from 'react-redux'

import pokedex, {human} from '../data/pokedex'

import PokedexEntry from './PokedexEntry'

function Pokedex (props){
    
    return <div className='pokedex'>
        <h1>Pokedex</h1>
        <div className='pokedex-container'>
        {props.role === 'master' && <PokedexEntry poke={human}/>}
        {pokedex.map(item => <PokedexEntry poke={item}/>)}
        </div>
    </div>
}

function mapStateToProps (state){
    return ({
        role: state.user.role
    })
}

export default connect(mapStateToProps)(Pokedex)