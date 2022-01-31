import PropTypes from 'prop-types';
import React from 'react';
import Jumbotron from '../common/jumbotron/Jumbotron';
import Skin from './Skin';

const SkinFuturico = ({ latestRevision, latestVersion }) => (
  <main className="skin futurico" role="main">
    <Jumbotron latestRevision={latestRevision} latestVersion={latestVersion} />
    <Skin defaultColor="futurico" skin="futurico" title="Futurico Skin" />
  </main>
);

SkinFuturico.propTypes = {
  latestRevision: PropTypes.string,
  latestVersion: PropTypes.string,
};

SkinFuturico.defaultProps = {
  latestRevision: null,
  latestVersion: null,
};

export default SkinFuturico;
