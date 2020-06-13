import './Sidebar.scss';
import { Col, Nav, NavItem, NavLink } from 'reactstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import React from 'react';
import _ from 'lodash';

const badges = [
  {
    url: 'https://www.npmjs.com/package/react-ui-icheck',
    img: 'npm/v/react-ui-icheck',
    alt: 'npm',
  },
  {
    url: 'https://david-dm.org/victorpopkov/react-ui-icheck',
    img: 'david/victorpopkov/react-ui-icheck',
    alt: 'David',
  },
  {
    url: 'https://david-dm.org/victorpopkov/react-ui-icheck?type=dev',
    img: 'david/dev/victorpopkov/react-ui-icheck',
    alt: 'David Dev',
  },
  {
    url: 'https://github.com/victorpopkov/react-ui-icheck/actions',
    img: 'github/workflow/status/victorpopkov/react-ui-icheck/CI',
    alt: 'GitHub Workflow Status',
  },
  {
    url: 'https://codecov.io/gh/victorpopkov/react-ui-icheck',
    img: 'codecov/c/github/victorpopkov/react-ui-icheck',
    alt: 'Codecov',
  },
  {
    url: 'https://codeclimate.com/github/victorpopkov/react-ui-icheck',
    img: 'codeclimate/maintainability/victorpopkov/react-ui-icheck',
    alt: 'Code Climate',
  },
];

const badge = (href, src, alt) => (
  <NavItem>
    <NavLink
      href={href}
      rel="noopener noreferrer"
      styleName="badge"
      target="_blank"
    >
      <img alt={alt} src={`https://img.shields.io/${src}?style=flat-square`} />
    </NavLink>
  </NavItem>
);

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
        {_.map(badges, (entry) => badge(entry.url, entry.img, entry.alt))}
      </Nav>
    </Col>
  );
};

export default Sidebar;
