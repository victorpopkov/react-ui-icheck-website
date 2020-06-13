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

  render() {
    const { collapsed } = this.state;

    return (
      <BaseNavbar expand="md" light>
        <Container>
          <IndexLinkContainer to="/">
            <NavbarBrand>{config.lib.name}</NavbarBrand>
          </IndexLinkContainer>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse isOpen={collapsed} timeout={0} navbar>
            <div className="d-block d-md-inline-block ml-auto text-center">
              <hr className="d-block d-sm-none" />
              <Nav navbar>
                {this.renderNavItem(
                  'Checkbox',
                  '/checkbox',
                  'd-none d-md-inline-block',
                )}

                {this.renderNavItem(
                  'Radio',
                  '/radio',
                  'd-none d-md-inline-block',
                )}
                <NavItem>
                  <NavLink href={config.lib.repository}>GitHub</NavLink>
                </NavItem>
              </Nav>
            </div>
            <NavbarMobile />
          </Collapse>
        </Container>
      </BaseNavbar>
    );
  }
}

export default Navbar;
