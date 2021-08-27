import React, {useEffect, useState} from 'react'
import attackdex from '../data/attackdex'

function Attacks (props) {
    const [attack, setAttack] = useState(attackdex[0])
    const {pokedex, move, role, view} = props

    useEffect (() => {
        setAttack(attackdex.find(item => item.name === move.name))
    }, [])

    return <div className='attack'>
        <div className='subattack'>
            <h4>{attack.name}</h4>
            {pokedex && <p>Level: {move.level}</p>}
        </div>
        <div className='subattack'>
            <div className='mini'>
                <p>{attack.class}</p>
                <p>{attack.type}</p>
            </div>
            <div className='maxi'>
                <p>{attack.damage}</p>
                <p>{attack.hq}</p>
                <p>{attack.energy}e</p>
            </div>
        </div>
        {view === 'battle' && <div className='subattack'>
            <div className='mini'>
                <p>{attack.range}</p>
                <p>{attack.aoe}</p>
            </div>
            <div className='maxi'>
                <p>{attack.description}</p>
            </div>
        </div>}
        {view === 'contest' && <div className='subattack'>
            <div className='mini'>
                <p>{attack.contestType}</p>
                <p>{attack.appeal} appeal</p>
            </div>
            <div className='maxi'>
                <p>{attack.effect}</p>
            </div>
        </div>}
        {role === 'master' && <div className='subattack'>
            <p>{attack.details}</p> 
        </div>}
    </div>
}

export default Attacks