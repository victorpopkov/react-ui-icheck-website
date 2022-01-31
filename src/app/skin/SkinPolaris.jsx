import PropTypes from 'prop-types';
import React from 'react';
import Jumbotron from '../common/jumbotron/Jumbotron';
import Skin from './Skin';

const SkinPolaris = ({ latestRevision, latestVersion }) => (
  <main className="skin polaris" role="main">
    <Jumbotron latestRevision={latestRevision} latestVersion={latestVersion} />
    <Skin defaultColor="polaris" skin="polaris" title="Polaris Skin" />
  </main>
);

SkinPolaris.propTypes = {
  latestRevision: PropTypes.string,
  latestVersion: PropTypes.string,
};

SkinPolaris.defaultProps = {
  latestRevision: null,
  latestVersion: null,
};

export default SkinPolaris;
