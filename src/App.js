import HordesVariants from './components/HordesVariants';
import Pokedex from './components/Pokedex';
import Login from './components/Login';

import './App.css';
import { Link, Route, Switch } from 'react-router-dom'
import {connect} from 'react-redux'

function App(props) {
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
      </Switch>
    </div>
  );
}

function mapStateToProps (state){
  return ({
    role: state.user.role
  })
}

export default connect(mapStateToProps)(App);
