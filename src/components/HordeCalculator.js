import React from 'react'
import { useSubmitValue, useVariants } from '../hooks/customHooks'

function HordeCalculator () {
    const [number, setNumber, form, setForm] = useSubmitValue(0)
    const [variants, setVariants, initialVariants] = useVariants(number)

    function handleClick (e){
        setVariants(initialVariants)
        setNumber(e)
    }

    return (
        <div className='horde-card'>
            <form>
                <label htmlFor='horde-size'>Horde Size:</label>
                <input type='number' id='horde=size' value={form} onChange={setForm} />
                <button onClick={handleClick}>Submit</button>
            </form>
            <p>Shinies: {variants.shinies}</p>
            <p>Albinos: {variants.albinos}</p>
            <p>Melanistics: {variants.melans}</p>
        </div>
    )
}

export default HordeCalculator