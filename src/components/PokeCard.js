import React from 'react'

function PokeCard (props) {
    const {name, url} = props

    return (
        <div>{name}</div>
    )
}

export default PokeCard