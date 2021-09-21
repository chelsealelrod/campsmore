import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Camp } from './components/Camp';
import { BrowserRouter as Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Camp />
    </ Router>
   </React.StrictMode>,
    document.getElementById("root")
)