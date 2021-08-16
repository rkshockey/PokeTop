import { useEffect, useState } from 'react'
import axios from 'axios'

export const useAxiosState = (url, initial) => {
    const [array, setArray] = useState(initial)

    useEffect(() =>{
        axios.get(url)
            .then (res => setArray(res.data))
            .catch(err => console.log(err))
    }, [])

    return [array, setArray]
}

export const useAxiosStateWResults = (url) => {
    const [array, setArray] = useState([])

    useEffect(() =>{
        axios.get(url)
            .then (res => setArray(res.data.results))
            .catch(err => console.log(err))
    }, [])
    
    return [array, setArray]
}