import { NavItem, NavLink } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import React from 'react';
import * as styles from './navItem.scss';

export default (name, to, className, isHref) => (
  <NavItem className={className}>
    {!isHref ? (
      <LinkContainer to={to}>
        <NavLink className={styles.link}>{name}</NavLink>
      </LinkContainer>
    ) : (
      <NavLink className={styles.link} href={to}>
        {name}
      </NavLink>
    )}
  </NavItem>
);
