import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

import Home from '../Home/Home';
import Favorite from '../Favorite/Favorite';

function App(props) {
  return (
  
    <div>
      <Router>
        <nav>
          <Link to="/Home" className="link">Home</Link>
          <Link to="/Favorite" className="link">Favorite</Link>
        </nav>
        <Route path="/Home" exact>
          <Home />
        </Route>
        
        <Route path="/Favorite">
          <Favorite />
        </Route>
        
      </Router>
    </div>
  
  );
}

export default App;
