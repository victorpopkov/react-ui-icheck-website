import 'bootstrap/dist/css/bootstrap.min.css';
import 'icheck/skins/all.css';
import './style.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';
import { Footer, Navbar } from './common';

const App = ({ children }) => (
  <div className="app">
    <Navbar />
    {children}
    <Footer />
  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

App.defaultProps = {
  children: null,
};

export default hot(App);
