import {
  Navbar as BaseNavbar,
  Collapse,
  Container,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarToggler,
} from 'reactstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import config from '@WebsiteConfig';
import NavbarMobile from './NavbarMobile';

@hot(module)
class Navbar extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      collapsed: false,
    };
  }

  toggleNavbar() {
    this.setState((state) => ({
      collapsed: !state.collapsed,
    }));
  }

  renderNavItem = (name, to, className) => (
    <NavItem className={className}>
      <LinkContainer to={to}>
        <NavLink>{name}</NavLink>
      </LinkContainer>
    </NavItem>
  );

  renderMenu = () => (
    <div className="d-none d-lg-inline-block ml-auto text-center">
      <Nav className="d-flex align-content-center align-items-center" navbar>
        {this.renderNavItem('Checkbox', '/checkbox')}
        {this.renderNavItem('Radio', '/radio')}
        <NavItem>
          <NavLink href={config.lib.repository}>GitHub</NavLink>
        </NavItem>
      </Nav>
    </div>
  );

  render() {
    const { collapsed } = this.state;

    return (
      <BaseNavbar expand="lg" light>
        <Container>
          <IndexLinkContainer to="/">
            <NavbarBrand>{config.lib.name}</NavbarBrand>
          </IndexLinkContainer>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse isOpen={collapsed} timeout={0} navbar>
            {this.renderMenu()}
            <NavbarMobile />
          </Collapse>
        </Container>
      </BaseNavbar>
    );
  }
}

export default Navbar;
