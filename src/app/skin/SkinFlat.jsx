import PropTypes from 'prop-types';
import React from 'react';
import { hot } from 'react-hot-loader';
import Jumbotron from '../common/jumbotron/Jumbotron';
import Skin from './Skin';

const SkinFlat = ({ latestRevision, latestVersion }) => (
  <main className="skin flat" role="main">
    <Jumbotron latestRevision={latestRevision} latestVersion={latestVersion} />
    <Skin defaultColor="flat" skin="flat" title="Flat Skin" colorSchemes />
  </main>
);

SkinFlat.propTypes = {
  latestRevision: PropTypes.string,
  latestVersion: PropTypes.string,
};

SkinFlat.defaultProps = {
  latestRevision: null,
  latestVersion: null,
};

export default hot(module)(SkinFlat);
