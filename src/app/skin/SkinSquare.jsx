import PropTypes from 'prop-types';
import React from 'react';
import Jumbotron from '../common/jumbotron/Jumbotron';
import Skin from './Skin';

const SkinSquare = ({ latestRevision, latestVersion }) => (
  <main className="skin square" role="main">
    <Jumbotron latestRevision={latestRevision} latestVersion={latestVersion} />
    <Skin
      defaultColor="square"
      skin="square"
      title="Square Skin"
      colorSchemes
    />
  </main>
);

SkinSquare.propTypes = {
  latestRevision: PropTypes.string,
  latestVersion: PropTypes.string,
};

SkinSquare.defaultProps = {
  latestRevision: null,
  latestVersion: null,
};

export default SkinSquare;
