import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import { hot } from 'react-hot-loader/root';
import config from '@Config';
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

class App extends React.Component {
  componentDidMount() {
    this.latestVersion = null;
    this.latestRevision = null;

    const api = axios.create({
      baseURL: `https://api.github.com/repos/${config.lib.user}/${config.lib.name}`,
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });

    api.get(`/contents/package.json`).then((res) => {
      if (res.data.encoding === null) {
        return;
      }

      switch (res.data.encoding) {
        case 'json':
          this.latestVersion = res.data.version;
          this.forceUpdate();
          break;
        case 'base64':
          this.latestVersion = JSON.parse(atob(res.data.content)).version;
          this.forceUpdate();
          break;
        default:
      }
    });

    api.get(`/commits`).then((res) => {
      this.latestRevision = res.data[0].sha;
      this.forceUpdate();
    });
  }

  render() {
    const childProps = {
      latestRevision: this.latestRevision,
      latestVersion: this.latestVersion,
    };

    return (
      <div className="app">
        <Helmet>
          <script async defer src="https://buttons.github.io/buttons.js" />
        </Helmet>
        <Navbar />
        <Switch>
          <Route path="/" render={() => <Home {...childProps} />} exact />
          <Route
            path="/checkbox"
            render={() => <Checkbox {...childProps} />}
            exact
          />
          <Route path="/radio" render={() => <Radio {...childProps} />} exact />
          <Route
            path="/installation"
            render={() => <Installation {...childProps} />}
            exact
          />
          <Route
            path="/skin/flat"
            render={() => <SkinFlat {...childProps} />}
            exact
          />
          <Route
            path="/skin/futurico"
            render={() => <SkinFuturico {...childProps} />}
            exact
          />
          <Route
            path="/skin/line"
            render={() => <SkinLine {...childProps} />}
            exact
          />
          <Route
            path="/skin/minimal"
            render={() => <SkinMinimal {...childProps} />}
            exact
          />
          <Route
            path="/skin/polaris"
            render={() => <SkinPolaris {...childProps} />}
            exact
          />
          <Route
            path="/skin/square"
            render={() => <SkinSquare {...childProps} />}
            exact
          />
          <Route component={Error404} path="*" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default hot(App);
