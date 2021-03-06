import React from 'react';
import { hot } from 'react-hot-loader';
import Jumbotron from '../common/jumbotron/Jumbotron';
import Skin from './Skin';

const SkinFlat = () => (
  <main className="skin flat" role="main">
    <Jumbotron />
    <Skin defaultColor="flat" skin="flat" title="Flat Skin" colorSchemes />
  </main>
);

export default hot(module)(SkinFlat);
