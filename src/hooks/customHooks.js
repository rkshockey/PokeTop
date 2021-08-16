import { useEffect, useState } from "react"

export const useChangeValue = (initialValue) => {
    const [start, setStart] = useState(initialValue)

    function handleChange (e){
        setStart(e.target.value)
    }

    return [start, handleChange]
}

export const useSubmitValue = (initialValue) => {
    const [formValue, setFormValue] = useChangeValue(initialValue)
    const [value, setValue] = useState(initialValue)

    function handleClick (e){
        e.preventDefault();
        setValue(formValue)
    }

    return [value, handleClick, formValue, setFormValue]
}

export const useArray = (number) => {
    const [array, setArray] = useState([])

    useEffect(() => {
        setArray(Array.from({ length: number } ));
    }, [number])

    return [array, setArray]
}

export const randomIVs = () => {
    const randIV = {
        attack: 0,
        defense: 0,
        'special-attack': 0,
        'special-defense': 0,
        speed: 0,
        hp: 0
    }
    
    for (const prop in randIV){
        randIV[prop] = (Math.ceil(Math.random() * 10))
    }

    return randIV
}

export const useVariants = (number) => {
    const initialValue = {
        shinies: 0,
        albinos: 0,
        melans: 0
    }
    const [array, setArray] = useArray(number)
    const [variants, setVariants] = useState(initialValue)

    for (let i = 0; i < array.length; i++){
        const IVs = randomIVs()
        
        if (IVs['attack'] + IVs['defense'] + IVs['hp'] + IVs['special-attack'] + IVs['special-defense'] + IVs['speed'] === 60){
            setVariants({
                ...variants,
                melans: variants.melans + 1
            })
        }else if(IVs['attack'] + IVs['defense'] + IVs['hp'] === 30){
            setVariants({
                ...variants,
                shinies: variants.shinies + 1
            })
        }else if(IVs['special-attack'] + IVs['special-defense'] + IVs['speed'] === 30){
            setVariants({
                ...variants,
                albinos: variants.albinos + 1
            })
        }
    }

    return [variants, setVariants, initialValue]
}