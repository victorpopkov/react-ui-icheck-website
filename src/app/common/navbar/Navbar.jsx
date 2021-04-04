import {
  Navbar as BaseNavbar,
  Collapse,
  Container,
  NavbarBrand,
  NavbarToggler,
} from 'reactstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import config from '@Config';
import NavbarMenu from './NavbarMenu';
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
            <NavbarMenu />
            <NavbarMobile />
          </Collapse>
        </Container>
      </BaseNavbar>
    );
  }
}

export default Navbar;
