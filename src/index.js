// index.js (if you're wrapping <App> with <BrowserRouter>)
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Only wrap Router here
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Your custom CSS file


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
