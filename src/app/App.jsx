import { Helmet } from 'react-helmet';
import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';
import { Footer, Navbar } from './common';

const App = ({ children }) => (
  <div className="app">
    <Helmet>
      <script async defer src="https://buttons.github.io/buttons.js" />
    </Helmet>
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
