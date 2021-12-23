import React from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import MyButton from "./MyButton";
import logo from "./images/ss-logo.png";
import { NavLink as RNavLink, Link } from "react-router-dom";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar expand="md" light>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>

          <NavbarToggler className="" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ms-auto fs-5 mt-5 text-decoration-none" navbar>
              <NavItem>
                <RNavLink className="text-white overlay px-2 pb-2 text-decoration-none" to="/membership">
                  Membership
                </RNavLink>
              </NavItem>
              <NavItem>
                <RNavLink className="text-white overlay  px-2 pb-2 text-decoration-none" to="/suites">
                  Suites
                </RNavLink>
              </NavItem>
              <NavItem>
                <RNavLink className="text-white overlay  px-2 pb-2 text-decoration-none" to="/dropin">
                  Drop In
                </RNavLink>
              </NavItem>
              <NavItem>
                <RNavLink className="text-white overlay  px-2 pb-2 text-decoration-none" to="/community">
                  Community
                </RNavLink>
              </NavItem>
              <NavItem>
                <RNavLink className="text-white overlay  px-2 pb-2 text-decoration-none" to="/contact">
                  Contact
                </RNavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white p-0 overlay  px-2" style={{ marginTop: "3px" }} href="/">
                  <i className="fas fa-sm fa-cart-plus"></i>
                </NavLink>
              </NavItem>
              <div style={{ marginTop: "-1.5rem" }} className="">
                <NavItem>
                  <NavLink className="" href="/">
                    <MyButton>BOOK A TOUR</MyButton>
                  </NavLink>
                </NavItem>
              </div>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
