import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation';
import CreateAnimal from './components/CreateAnimal';
import GetAnimals from './components/GetAnimals';

function App() {
  return (
    <Router>
      <Navigation/>
      <Route path="/" exact component={GetAnimals} />
      <Route path="/edit/:id" component={CreateAnimal} />
      <Route path="/create" component={CreateAnimal} />
    </Router>
  );
}

export default App;
