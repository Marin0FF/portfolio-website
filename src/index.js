import React from 'react'
import { hydrate, render } from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App'

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <Router>
          <App />
      </Router>
    </React.StrictMode>
    , rootElement);
} else {
  render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
    , rootElement);
}




