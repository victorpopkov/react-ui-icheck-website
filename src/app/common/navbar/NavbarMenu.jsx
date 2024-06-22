import { Nav } from 'reactstrap';
import React from 'react';
import classNames from 'classnames';
import config from '@Config';
import * as styles from './NavbarMenu.scss';
import GitHub from '../github/GitHub';
import navItem from './navItem';

const NavbarMenu = () => (
  <div className="d-none d-lg-inline-block ms-auto text-center">
    <Nav
      className={classNames(
        styles.menu,
        'd-flex',
        'align-content-center',
        'align-items-center',
      )}
      navbar
    >
      <GitHub />
      {navItem('Checkbox', '/checkbox')}
      {navItem('Radio', '/radio')}
      {navItem('GitHub', config.lib.repository, null, true)}
    </Nav>
  </div>
);

export default NavbarMenu;
