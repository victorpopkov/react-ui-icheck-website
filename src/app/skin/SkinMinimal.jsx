import PropTypes from 'prop-types';
import React from 'react';
import Jumbotron from '../common/jumbotron/Jumbotron';
import Skin from './Skin';

const SkinMinimal = ({ latestRevision, latestVersion }) => (
  <main className="skin minimal" role="main">
    <Jumbotron latestRevision={latestRevision} latestVersion={latestVersion} />
    <Skin
      defaultColor="minimal"
      skin="minimal"
      title="Minimal Skin"
      colorSchemes
    />
  </main>
);

SkinMinimal.propTypes = {
  latestRevision: PropTypes.string,
  latestVersion: PropTypes.string,
};

SkinMinimal.defaultProps = {
  latestRevision: null,
  latestVersion: null,
};

export default SkinMinimal;
