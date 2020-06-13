import './Sidebar.scss';
import { Col, Nav, NavItem, NavLink } from 'reactstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import React from 'react';
import _ from 'lodash';
import SidebarBadge from './SidebarBadge';

const badges = [
  {
    alt: 'npm',
    href: 'https://www.npmjs.com/package/react-ui-icheck',
    path: 'npm/v/react-ui-icheck',
  },
  {
    alt: 'David',
    href: 'https://david-dm.org/victorpopkov/react-ui-icheck',
    path: 'david/victorpopkov/react-ui-icheck',
  },
  {
    alt: 'David Dev',
    href: 'https://david-dm.org/victorpopkov/react-ui-icheck?type=dev',
    path: 'david/dev/victorpopkov/react-ui-icheck',
  },
  {
    alt: 'GitHub Workflow Status',
    href: 'https://github.com/victorpopkov/react-ui-icheck/actions',
    path: 'github/workflow/status/victorpopkov/react-ui-icheck/CI',
  },
  {
    alt: 'Codecov',
    href: 'https://codecov.io/gh/victorpopkov/react-ui-icheck',
    path: 'codecov/c/github/victorpopkov/react-ui-icheck',
  },
  {
    alt: 'Code Climate',
    href: 'https://codeclimate.com/github/victorpopkov/react-ui-icheck',
    path: 'codeclimate/maintainability/victorpopkov/react-ui-icheck',
  },
];

const navItem = (name, to) => (
  <NavItem>
    <LinkContainer to={to}>
      <NavLink styleName="link">{name}</NavLink>
    </LinkContainer>
  </NavItem>
);

const Sidebar = () => {
  return (
    <Col className="d-none d-md-block" md={3}>
      <h5 className="pb-2">Getting Started</h5>
      <Nav vertical>
        <NavItem>
          <IndexLinkContainer to="/">
            <NavLink styleName="link">Overview</NavLink>
          </IndexLinkContainer>
        </NavItem>
        {navItem('Checkbox', '/checkbox')}
        {navItem('Radio', '/radio')}
        {navItem('Installation', '/installation')}
      </Nav>
      <hr className="mb-4" />
      <h5 className="pb-2">Skins</h5>
      <Nav vertical>
        {navItem('Flat', '/skin/flat')}
        {navItem('Line', '/skin/line')}
        {navItem('Minimal', '/skin/minimal')}
        {navItem('Square', '/skin/square')}
      </Nav>
      <hr />
      <Nav vertical>
        {navItem('Futurico', '/skin/futurico')}
        {navItem('Polaris', '/skin/polaris')}
      </Nav>
      <hr className="mb-4" />
      <h5 className="pb-2">Library</h5>
      <Nav vertical>
        {_.map(badges, (entry, key) => (
          <SidebarBadge
            alt={entry.alt}
            href={entry.href}
            key={`badge-${key}`}
            path={entry.path}
          />
        ))}
      </Nav>
    </Col>
  );
};

export default Sidebar;
