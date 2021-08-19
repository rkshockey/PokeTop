import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/pokemonActions'
import users from '../data/users'

function Login (props) {
    const [user, setUser] = useState(0)

    useEffect(() => {
        setUser(props.id)
    }, [])

    function handleChange (e){
        setUser(e.target.value);
        props.login(e.target.value);
    }

    return <div className='login-form'>
        <form>
            <select name='user' value={user} onChange={handleChange}>
                {users.map(item => <option value={item.id} key={item.id}>{item.username}</option>)}
            </select>
        </form>
    </div>
}

function mapStateToProps (state){
    return ({
        id: state.user.id
    })
}

export default connect(mapStateToProps, {login})(Login)