import { Col, Nav, Row } from 'reactstrap';
import React from 'react';
import config from '@Config';
import * as styles from './NavbarMobile.scss';
import GitHub from '../github/GitHub';
import navItem from './navItem';

const NavbarMobile = () => (
  <div className={styles.mobile}>
    <Row>
      <Col sm={12}>
        <GitHub />
      </Col>
      <Col sm={4}>
        <hr />
        <h6>Navigation</h6>
        <Nav navbar>{navItem('GitHub', config.lib.repository, null, true)}</Nav>
      </Col>
      <Col sm={4}>
        <hr />
        <h6>Getting Started</h6>
        <Nav navbar>
          {navItem('Overview', '/')}
          {navItem('Checkbox', '/checkbox')}
          {navItem('Radio', '/radio')}
          {navItem('Installation', '/installation')}
        </Nav>
      </Col>
      <Col sm={4}>
        <hr />
        <h6>Skins</h6>
        <Nav navbar>
          {navItem('Flat', '/skin/flat')}
          {navItem('Line', '/skin/line')}
          {navItem('Minimal', '/skin/minimal')}
          {navItem('Square', '/skin/square')}
          {navItem('Futurico', '/skin/futurico')}
          {navItem('Polaris', '/skin/polaris')}
        </Nav>
      </Col>
    </Row>
  </div>
);

export default NavbarMobile;
