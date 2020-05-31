import React from 'react';
import { hot } from 'react-hot-loader';
import Jumbotron from '../common/jumbotron/Jumbotron';
import Skin from './Skin';

const SkinFuturico = () => (
  <main className="skin futurico" role="main">
    <Jumbotron />
    <Skin defaultColor="futurico" skin="futurico" title="Futurico Skin" />
  </main>
);

export default hot(module)(SkinFuturico);
