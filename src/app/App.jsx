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

  renderRoute(path, component) {
    return (
      <Route
        path={path}
        render={() =>
          React.createElement(component, {
            latestRevision: this.latestRevision,
            latestVersion: this.latestVersion,
          })
        }
        exact
      />
    );
  }

  render() {
    return (
      <div className="app">
        <Helmet>
          <script async defer src="https://buttons.github.io/buttons.js" />
        </Helmet>
        <Navbar />
        <Switch>
          {this.renderRoute('/', Home)}
          {this.renderRoute('/checkbox', Checkbox)}
          {this.renderRoute('/radio', Radio)}
          {this.renderRoute('/installation', Installation)}
          {this.renderRoute('/skin/flat', SkinFlat)}
          {this.renderRoute('/skin/futurico', SkinFuturico)}
          {this.renderRoute('/skin/line', SkinLine)}
          {this.renderRoute('/skin/minimal', SkinMinimal)}
          {this.renderRoute('/skin/polaris', SkinPolaris)}
          {this.renderRoute('/skin/square', SkinSquare)}
          <Route component={Error404} path="*" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default hot(App);
