import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Footer, Navbar } from './common';
import Home from './home/Home';
import Checkbox from './checkbox/Checkbox';
import Radio from './radio/Radio';
import Installation from './installation/Installation';
import SkinFlat from './skin/SkinFlat';
import SkinFuturico from './skin/SkinFuturico';
import SkinLine from './skin/SkinLine';
import SkinMinimal from './skin/SkinMinimal';
import SkinPolaris from './skin/SkinPolaris';
import SkinSquare from './skin/SkinSquare';
import Error404 from './error/404/Error404';

const App = () => (
  <div className="app">
    <Helmet>
      <script async defer src="https://buttons.github.io/buttons.js" />
    </Helmet>
    <Navbar />
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={Checkbox} path="/checkbox" exact />
      <Route component={Radio} path="/radio" exact />
      <Route component={Installation} path="/installation" exact />
      <Route component={SkinFlat} path="/skin/flat" exact />
      <Route component={SkinFuturico} path="/skin/futurico" exact />
      <Route component={SkinLine} path="/skin/line" exact />
      <Route component={SkinMinimal} path="/skin/minimal" exact />
      <Route component={SkinPolaris} path="/skin/polaris" exact />
      <Route component={SkinSquare} path="/skin/square" exact />
      <Route component={Error404} path="*" />
    </Switch>
    <Footer />
  </div>
);

export default hot(App);
