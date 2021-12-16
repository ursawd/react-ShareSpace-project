import React from "react";
import logo from "./images/ss-logo.png";
import Button from "./Button";

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img src={logo} alt="LOGO" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto fs-5">
            <li class="nav-item">
              <a class="nav-link  text-white" href="/">
                Membership
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/">
                Suites
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/">
                Drop In
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link  text-white" href="/">
                Community
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link  text-white" href="/">
                Contact
              </a>
            </li>
          </ul>
          <i class="fas fa-cart-plus fa-lg text-white me-3"></i>
          <Button btnText="BOOK A TOUR" />
        </div>
      </div>
    </nav>
  );
}
