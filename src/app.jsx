import { HashRouter as Router } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './app/Root';

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <Router>
    <Root />
  </Router>,
  document.querySelector('#root'),
);
