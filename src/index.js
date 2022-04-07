import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App'
import {BrowserRouter, BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
     <App/>
  </BrowserRouter>
 
    ,
  
  document.getElementById('root')
);

