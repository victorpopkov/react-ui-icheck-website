import React from 'react';
import { hot } from 'react-hot-loader';
import Jumbotron from '../common/jumbotron/Jumbotron';
import Skin from './Skin';

const SkinMinimal = () => (
  <main className="skin minimal" role="main">
    <Jumbotron />
    <Skin
      defaultColor="minimal"
      skin="minimal"
      title="Minimal Skin"
      colorSchemes
    />
  </main>
);

export default hot(module)(SkinMinimal);
