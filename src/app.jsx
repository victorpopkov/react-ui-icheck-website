import { HashRouter as Router } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector('#app'),
);
