import 'bootstrap/dist/css/bootstrap.min.css';
import 'icheck/skins/all.css';
import './style.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Footer, Navbar } from './common';

@hot(module)
class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="app">
        <Navbar />
        {children}
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
};

App.defaultProps = {
  children: null,
};

export default App;
