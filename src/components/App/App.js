import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

import Home from '../Home/Home';
import Categories from '../Categories/Categories';

function App(props) {
  return (
  
    <div>
      <Router>
        <nav>
          <Link to="/Home" className="link">Home</Link>
          <Link to="/Categories" className="link">Categories</Link>
        </nav>
        <Route path="/Home" exact>
          <Home />
        </Route>
        
        <Route path="/Categories">
          <Categories />
        </Route>
        
      </Router>
    </div>
  
  );
}

export default App;
