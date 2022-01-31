import { Nav } from 'reactstrap';
import React from 'react';
import classNames from 'classnames';
import GitHub from '../github/GitHub';
import config from '../../../../config';
import navItem from './navItem';
import styles from './NavbarMenu.scss';

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
