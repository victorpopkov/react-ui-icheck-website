import { HashRouter as Router } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector('#root'),
);
