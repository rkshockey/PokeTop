export const LOGIN = "LOGIN"

export const login = (id) => {
    return ({type: LOGIN, payload: id})
}