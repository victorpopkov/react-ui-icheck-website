import { Nav } from 'reactstrap';
import React from 'react';
import { hot } from 'react-hot-loader';
import GitHub from '../github/GitHub';
import config from '../../../../config';
import navItem from './navItem';

const NavbarMenu = () => (
  <div className="d-none d-lg-inline-block ms-auto text-center">
    <Nav className="d-flex align-content-center align-items-center" navbar>
      <GitHub />
      {navItem('Checkbox', '/checkbox')}
      {navItem('Radio', '/radio')}
      {navItem('GitHub', config.lib.repository)}
    </Nav>
  </div>
);

export default hot(module)(NavbarMenu);
