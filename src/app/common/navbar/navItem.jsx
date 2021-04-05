import './navItem.scss';
import { NavItem, NavLink } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import React from 'react';

export default (name, to, className, isHref) => (
  <NavItem className={className}>
    {!isHref ? (
      <LinkContainer to={to} exact>
        <NavLink styleName="link">{name}</NavLink>
      </LinkContainer>
    ) : (
      <NavLink href={to} styleName="link">
        {name}
      </NavLink>
    )}
  </NavItem>
);
