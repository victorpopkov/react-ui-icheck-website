import {
  Navbar as BaseNavbar,
  Collapse,
  NavbarBrand,
  NavbarToggler,
} from 'reactstrap';
import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
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
      <BaseNavbar container="md" expand="lg" light>
        <LinkContainer to="/">
          <NavbarBrand>{config.lib.name}</NavbarBrand>
        </LinkContainer>
        <NavbarToggler onClick={this.toggleNavbar} />
        <Collapse isOpen={collapsed} timeout={0} navbar>
          <NavbarMenu />
          <NavbarMobile />
        </Collapse>
      </BaseNavbar>
    );
  }
}

export default Navbar;
