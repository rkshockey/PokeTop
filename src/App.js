import HordesVariants from './components/HordesVariants';
import PokeCards from './components/PokeCards';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Link to='/'><button>Home</button></Link>
          <Link to='/hordes-variants'><button>Hordes</button></Link>
          <Link to='/pokecards'><button>PokeCards</button></Link>
        </nav>
      </header>
      <Switch>
        <Route path='/hordes-variants'>
          <HordesVariants />
        </Route>
        <Route path='/pokecards'>
          <PokeCards />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
