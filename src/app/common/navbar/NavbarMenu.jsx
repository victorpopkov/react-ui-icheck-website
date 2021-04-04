import './NavbarMobile.scss';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import React from 'react';
import { hot } from 'react-hot-loader';
import GitHub from '../github/GitHub';
import config from '../../../../config';

const navItem = (name, to, className) => (
  <NavItem className={className}>
    <LinkContainer to={to}>
      <NavLink styleName="link">{name}</NavLink>
    </LinkContainer>
  </NavItem>
);

const NavbarMobile = () => (
  <div className="d-none d-lg-inline-block ml-auto text-center">
    <Nav className="d-flex align-content-center align-items-center" navbar>
      <GitHub />
      {navItem('Checkbox', '/checkbox')}
      {navItem('Radio', '/radio')}
      <NavItem>
        <NavLink href={config.lib.repository}>GitHub</NavLink>
      </NavItem>
    </Nav>
  </div>
);

export default hot(module)(NavbarMobile);
