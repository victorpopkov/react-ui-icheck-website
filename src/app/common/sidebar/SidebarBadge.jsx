import './SidebarBadge.scss';
import { NavItem, NavLink } from 'reactstrap';
import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

const SidebarBadge = ({ alt, href, path }) => (
  <NavItem>
    <NavLink
      href={href}
      rel="noopener noreferrer"
      styleName="badge"
      target="_blank"
    >
      <img alt={alt} src={`https://img.shields.io/${path}?style=flat-square`} />
    </NavLink>
  </NavItem>
);

SidebarBadge.propTypes = {
  alt: PropTypes.string,
  href: PropTypes.string,
  path: PropTypes.string,
};

SidebarBadge.defaultProps = {
  alt: null,
  href: null,
  path: null,
};

export default hot(module)(SidebarBadge);
