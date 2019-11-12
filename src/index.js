import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { Home, About, Contact, Navigation } from './components';

ReactDOM.render(
<Router>
<App />
</Router>, 
document.getElementById('root'));
