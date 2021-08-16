import HordesVariants from './components/HordesVariants';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Link to='/'><button>Home</button></Link>
          <Link to='/hordes-variants'><button>Hordes</button></Link>
        </nav>
      </header>
      <Switch>
        <Route path='/hordes-variants'>
          <HordesVariants />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
