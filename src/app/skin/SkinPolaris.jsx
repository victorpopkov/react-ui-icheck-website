import React from 'react';
import { hot } from 'react-hot-loader';
import Jumbotron from '../common/jumbotron/Jumbotron';
import Skin from './Skin';

const SkinPolaris = () => (
  <main className="skin polaris" role="main">
    <Jumbotron />
    <Skin defaultColor="polaris" skin="polaris" title="Polaris Skin" />
  </main>
);

export default hot(module)(SkinPolaris);
