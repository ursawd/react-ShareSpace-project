import React from "react";
import RowSection from "./RowSection";
import NavBar from "./NavBar";
import Footer from "./Footer";
import sscolors from "../sscolors";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import coworking from "./images/co-working-spaces-beach-bar-panama.jpg";
import MyButton from "./MyButton";

export default function DropinView() {
  return (
    <div>
      {/* ---------------------------------------------------------------------------------------- */}
      <RowSection height="145vh">
        <NavBar />
        <div className="text-center mt-5 mx-auto w-75">
          <h1 style={{ color: sscolors.yellow, fontSize: "11rem" }}>DROP IN</h1>

          <p className="lead " style={{ letterSpacing: "3px" }}>
            Available any weekday from 8am-6pm. Get instant access to conference rooms, community areas, breakout
            booths, and free WiFi. <strong>Click either drop in option below to book and purchase!</strong>
          </p>
        </div>
        <div className="row mt-5 pt-5 justify-content-around">
          <div className="col-md-5">
            <img className="img-fluid" src="../assets/images/person1.jpg" alt="Person 1" />
            <h3 className="fs-2 pt-3">Daily Drop In</h3>
            <p className="lead">$25.00</p>
          </div>
          <div className="col-md-5">
            <img className="img-fluid" src="../assets/images/person2.webp" alt="Person 2" />
            <h3 className="fs-2 pt-3">Weekly Drop In</h3>
            <p className="lead">$85.00</p>
          </div>
        </div>
      </RowSection>
      {/* ---------------------------------------------------------------------------------------- */}
      <RowSection height="60vh" image="../assets/images/permanent-desk.jpg">
        <div className="mt-5 pt-5 text-center">
          <h2 style={{ fontSize: "11rem", letterSpacing: "2px" }} className="text-white">
            questions
          </h2>
          <MyButton overRide={true}>EMAIL US</MyButton>
        </div>
      </RowSection>
      {/* ---------------------------------------------------------------------------------------- */}
      <Footer />
    </div>
  );
}
