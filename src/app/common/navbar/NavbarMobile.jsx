import { Nav, NavItem, NavLink } from 'reactstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import React from 'react';
import { hot } from 'react-hot-loader';

const navItem = (name, to, className) => (
  <NavItem className={className}>
    <LinkContainer to={to}>
      <NavLink>{name}</NavLink>
    </LinkContainer>
  </NavItem>
);

const NavbarMobile = () => (
  <div className="d-md-none d-sm-block ml-auto text-center">
    <hr />
    <h6>Getting Started</h6>
    <Nav navbar>
      <NavItem>
        <IndexLinkContainer to="/">
          <NavLink>Overview</NavLink>
        </IndexLinkContainer>
      </NavItem>
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
