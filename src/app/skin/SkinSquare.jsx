import React from 'react';
import { hot } from 'react-hot-loader';
import Jumbotron from '../common/jumbotron/Jumbotron';
import Skin from './Skin';

const SkinSquare = () => (
  <main className="skin square" role="main">
    <Jumbotron />
    <Skin
      defaultColor="square"
      skin="square"
      title="Square Skin"
      colorSchemes
    />
  </main>
);

export default hot(module)(SkinSquare);
