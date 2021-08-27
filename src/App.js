import HordesVariants from './components/HordesVariants';
import Pokedex from './components/Pokedex';
import Login from './components/Login';
import PokedexPage from './components/PokedexPage';

import { login } from './actions/pokemonActions';

import './App.css';
import { Link, Route, Switch } from 'react-router-dom'
import {connect} from 'react-redux'
import {useEffect} from 'react'

function App(props) {
  useEffect(() => {
    const storedId = localStorage.getItem('userId');
    if (storedId){
      props.login(storedId)
    }
  }, [])

  return (
    <div className="App">
      <header>
        <nav>
          <Link to='/'><button>Home</button></Link>
          <Link to='/hordes-variants'><button>Hordes</button></Link>
          <Link to='/pokedex'><button>Pokedex</button></Link>
        </nav>
      </header>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route path='/hordes-variants'>
          <HordesVariants />
        </Route>
        <Route exact path='/pokedex'>
          <Pokedex />
        </Route>
        <Route path='/pokedex/:id'>
          <PokedexPage />
        </Route>
      </Switch>
    </div>
  );
}

function mapStateToProps (state){
  return ({
    role: state.user.role
  })
}

export default connect(mapStateToProps, {login})(App);
