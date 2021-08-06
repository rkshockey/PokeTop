import React from 'react';
import HordeCalculator from './HordeCalculator';
import { useChangeValue, useArray } from '../hooks/customHooks'

function HordesVariants (props){
    const [number, setNumber] = useChangeValue(0)
    const [array, setArray] = useArray(number)

    return (
        <div className='hordevariants'>
            <h1>Calculate variants in large groups.</h1>
            <form>
                <label htmlFor='numberOfTypes'>Types of Pokemon:</label>
                <input type='number' id='numberOfTypes' value={number} onChange={setNumber} />
            </form>
            {array.map((item, i) => <HordeCalculator key={i} />)}
        </div>

    )
}

export default HordesVariants