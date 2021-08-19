import { LOGIN } from "../actions/pokemonActions"

import users from "../data/users"

const initialState = {
    user: {
        id: 0,
        role: null,
        name: null,
        username: '--Select User--', 
        players: [],
        character: null
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN:
            return ({
                ...state,
                user: users.find(item => item.id === Number(action.payload))
            })

        default:
            return state
    }
}

export default reducer