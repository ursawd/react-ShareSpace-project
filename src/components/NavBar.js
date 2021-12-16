import React from "react";
import logo from "./images/ss-logo.png";
import Button from "./Button";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="LOGO" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fs-5 overlay">
            <li className="nav-item">
              <a className="nav-link  text-white" href="/">
                Membership
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">
                Suites
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">
                Drop In
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-white" href="/">
                Community
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-white" href="/">
                Contact
              </a>
            </li>
          </ul>
          <i className="fas fa-cart-plus fa-lg text-white me-3"></i>
          <Button btnText="BOOK A TOUR" />
        </div>
      </div>
    </nav>
  );
}
