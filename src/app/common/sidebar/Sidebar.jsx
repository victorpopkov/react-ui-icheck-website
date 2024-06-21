import { Col, Nav, NavItem, NavLink } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import React from 'react';
import _ from 'lodash';
import * as styles from './Sidebar.scss';
import SidebarBadge from './SidebarBadge';

const badges = [
  {
    alt: 'npm',
    href: 'https://www.npmjs.com/package/react-ui-icheck',
    path: 'npm/v/react-ui-icheck',
  },
  {
    alt: 'CI',
    href: 'https://github.com/victorpopkov/react-ui-icheck/actions/workflows/ci.yml',
    path: 'github/actions/workflow/status/victorpopkov/react-ui-icheck/ci.yml',
    args: {
      branch: 'main',
      label: 'ci',
    },
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
  {
    alt: 'Libraries.io',
    href: 'https://libraries.io/github/victorpopkov/react-ui-icheck',
    path: 'librariesio/github/victorpopkov/react-ui-icheck',
  },
];

const navItem = (name, to) => (
  <NavItem>
    <LinkContainer activeClassName={styles.active} to={to}>
      <NavLink className={styles.link}>{name}</NavLink>
    </LinkContainer>
  </NavItem>
);

const Sidebar = () => {
  return (
    <Col className="d-none d-lg-block" md={3}>
      <h5 className="pb-2">Getting Started</h5>
      <Nav vertical>
        <NavItem>
          <LinkContainer activeClassName={styles.active} to="/">
            <NavLink className={styles.link}>Overview</NavLink>
          </LinkContainer>
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
            args={entry.args}
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
