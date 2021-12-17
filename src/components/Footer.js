import React from "react";
import RowSection from "./RowSection";
import sscolors from "../sscolors";

export default function Footer() {
  return (
    <div className=" ">
      <RowSection height="50vh" bColor={sscolors.yellow}>
        <div className="col-md-7 ms-2">
          <h3 className="display-2 my-5">SHARESPACE COWORKING</h3>
          <div className="fs-5">
            <p className="mb-0">132 E Pacific Ave</p>
            <p>Spokane, WA 99201</p>
            <a className="text-dark" href="tel:509-555-9586">
              509-555-9586
            </a>
            <br />
            <i className="fab fa-instagram fa-lg mt-4"></i>
            <i className="fab fa-facebook fa-lg p-2"></i>{" "}
          </div>
        </div>
        <div className="col-md-5 row">
          <div className="col-lg-6 fs-5 mt-5">
            <p className="fs-3">Services</p>
            <a className="text-dark " href="/">
              Membership
            </a>
            <br />
            <a className="text-dark mt-2 " href="/">
              Suites
            </a>
            <br />
            <a className="text-dark mt-2" href="/">
              Drop In
            </a>
          </div>
          <div className="col-lg-6 fs-5 mt-5">
            <p className="fs-3">Who We Are</p>
            <a className="text-dark" href="/">
              Community
            </a>
            <br />
            <a className="text-dark mt-2" href="/">
              Contact
            </a>
          </div>
        </div>
      </RowSection>
    </div>
  );
}
