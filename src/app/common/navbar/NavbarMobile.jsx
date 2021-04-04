import './NavbarMobile.scss';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import React from 'react';
import { hot } from 'react-hot-loader';
import config from '../../../../config';

const navItem = (name, to, className) => (
  <NavItem className={className}>
    <LinkContainer to={to}>
      <NavLink styleName="link">{name}</NavLink>
    </LinkContainer>
  </NavItem>
);

const NavbarMobile = () => (
  <div styleName="mobile">
    <hr />
    <Nav navbar>
      {navItem('Checkbox', '/checkbox', 'd-none d-md-inline-block')}
      {navItem('Radio', '/radio', 'd-none d-md-inline-block')}
      <NavItem>
        <NavLink href={config.lib.repository}>GitHub</NavLink>
      </NavItem>
    </Nav>
    <hr />
    <h6>Getting Started</h6>
    <Nav navbar>
      {navItem('Overview', '/')}
      {navItem('Checkbox', '/checkbox')}
      {navItem('Radio', '/radio')}
      {navItem('Installation', '/installation')}
    </Nav>
    <hr />
    <h6>Skins</h6>
    <Nav navbar>
      {navItem('Flat', '/skin/flat')}
      {navItem('Line', '/skin/line')}
      {navItem('Minimal', '/skin/minimal')}
      {navItem('Square', '/skin/square')}
    </Nav>
    <hr />
    <Nav navbar>
      {navItem('Futurico', '/skin/futurico')}
      {navItem('Polaris', '/skin/polaris')}
    </Nav>
  </div>
);

export default hot(module)(NavbarMobile);
