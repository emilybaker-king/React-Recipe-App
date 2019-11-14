import React from 'react';
import './App.css';
import RecipeSearcher from './RecipeSearcher/RecipeSearcher';
import About from './About/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <ul className='pages'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>

      {/* the switch component looks ghrought the route components inside of it and renders the first one that matches the current URL */}
      <Switch>
        <Route exact path='/'>
          <RecipeSearcher />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
