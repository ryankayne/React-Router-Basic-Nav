import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </div>
);

export default App;
