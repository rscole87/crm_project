import React, { Component } from "react";
import { Nav, Navbar, NavItem, NavbarBrand, NavbarToggler, Collapse, Button, NavbarText } from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({ 
        isNavOpen: !this.state.isNavOpen 
    });
  }

  render() {
    return (
      <>
        <Navbar light sticky="top" expand="sm">
          <div className="container">
            <NavbarBrand className="mr-auto" href="/">
              <h3>CRM V-2.0</h3>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <i className="fa fa-home fa-lg" /> Home
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link" to="/customers">
                    <i className="fa fa-list fa-lg" /> Customers
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <i className="fa fa-address-card fa-lg" /> Contact Us
                  </NavLink>
                </NavItem>
              </Nav>

              <NavbarText right>
                <Button outline>
                  <i className="fa fa-sign-in fa-lg" /> Login
                </Button>
              </NavbarText>
            </Collapse>
          </div>
        </Navbar>
      </>
    );
  }
}

export default Header;
