import React from 'react'
import { useChangeValue, useVariants } from '../hooks/customHooks'

function HordeCalculator () {
    const [number, setNumber] = useChangeValue(0)
    const [variants, setVariants] = useVariants(number)

    return (
        <div className='horde-card'>
            <form>
                <label htmlFor='horde-size'>Horde Size:</label>
                <input type='number' id='horde=size' value={number} onChange={setNumber} />
            </form>
            <p>Shinies: {variants.shinies}</p>
            <p>Albinos: {variants.albinos}</p>
            <p>Melanistics: {variants.melans}</p>
        </div>
    )
}

export default HordeCalculator