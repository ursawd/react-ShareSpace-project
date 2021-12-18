import React from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import MyButton from "./MyButton";
import logo from "./images/ss-logo.png";

export default class NavBar3 extends React.Component {
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
          <NavbarBrand href="/">
            <img src={logo} alt="Logo" />
          </NavbarBrand>
          <NavbarToggler className="" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ms-auto fs-5 mt-5" navbar>
              <NavItem>
                <NavLink className="text-white overlay" href="/">
                  Membership
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white overlay" href="/">
                  Suites
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white overlay" href="/">
                  Drop In
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white overlay" href="/">
                  Community
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white overlay" href="/">
                  Contact
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white overlay" href="/">
                  <i className="fas fa-cart-plus"></i>
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
