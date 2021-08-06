import { useEffect, useState } from 'react'
import axios from 'axios'

export const useAxiosState = (url) => {
    const [array, setArray] = useState([])

    useEffect(() =>{
        axios.get(url)
            .then (res => setArray(res.data.results))
            .catch(err => console.log(err))
    }, [])

    console.log(array)

    return [array, setArray]
}