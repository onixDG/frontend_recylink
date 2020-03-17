import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation';
import CreateAnimal from './components/CreateAnimal';
import AnimalsComponent from './components/AnimalsComponent';

function App() {
  return (
    <Router>
      <Navigation/>
      <div className="container p-4">
          <Route path="/" exact component={AnimalsComponent} />
          <Route path="/edit/:id" component={CreateAnimal} />
          <Route path="/create" component={CreateAnimal} />
      </div>
     </Router>
  );
}

export default App;
