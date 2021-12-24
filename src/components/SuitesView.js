import React from "react";
import RowSection from "./RowSection";
import NavBar from "./NavBar";
import Footer from "./Footer";
import sscolors from "../sscolors";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import MyButton from "./MyButton";

const MySuiteCard = ({ image, title, text }) => {
  return (
    <React.Fragment>
      <Card className="border-0">
        <img width="100%" src={image} alt="Card cap" />
        <CardBody>
          <CardTitle className="fs-2">{title}</CardTitle>
          <CardText style={{ fontSize: "1.3rem" }}>{text}</CardText>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default function SuitesView() {
  return (
    <div>
      {/* ---------------------------------------------------------------------------------------- */}
      <RowSection height="100vh" bColor={sscolors.yellow}>
        <NavBar />
        <div className="text-center" style={{ paddingTop: "4rem" }}>
          <h1 style={{ fontSize: "12rem" }}>
            PRIVATE, LOCKABEL
            <br />
            SUITES
          </h1>
          <MyButton>INQUIRE</MyButton>
        </div>
      </RowSection>
      {/* ---------------------------------------------------------------------------------------- */}
      <RowSection height="130vh">
        <div className="row mt-5 pt-5 ps-4 ">
          <div className="col-md-4">
            <MySuiteCard
              image={"./assets/images/hot-desk.jpg"}
              title={"suite 1"}
              text={"149 sq. ft. - Not available at this time"}
            />
          </div>
          <div className="col-md-4">
            <MySuiteCard
              image={"./assets/images/coworkingsuites.jpg"}
              title={"suite 3"}
              text={"170 sq. ft. - Not available at this time"}
            />
          </div>
          <div className="col-md-4">
            <MySuiteCard
              image={"./assets/images/permanent-desk.jpg"}
              title={"suite3"}
              text={"160 sq. ft. - Not available at this time"}
            />
          </div>
        </div>
        <div className="text-center">
          <h2 className="display-3 mt-5  pt-5">IS YOUR FAVORITE SUITE TAKEN?</h2>
          <div className="mt-5">
            <MyButton overRide={true}>Get on the waitlist</MyButton>
          </div>
        </div>
      </RowSection>
      {/* ---------------------------------------------------------------------------------------- */}

      <RowSection height="100vh" bColor={sscolors.ltblue}>
        <div className="row text-center text-white mt-5 p-5 ">
          <div className="mt-5 ">
            <h2 style={{ fontSize: "5rem" }}>What's Included</h2>
          </div>
          <div className="mlist col-md-4 mt-5 lh-lg">
            <h4>mail services</h4>
            <h4>3 PARKING OPTIONS</h4>
            <h4>unlimited COFFEE + TEA</h4>
            <h4>FULL KITCHEN</h4>
            <hr className="border mb-5 d-md-none" />
          </div>
          <div className="mlist col-md-4 mt-5">
            <h4>bonus 2500 sq. ft. of workable space</h4>
            <h4>
              high speed wifi
              <br />
              322.26 download mbps / 34.71 upload mbps
            </h4>
            <h4>4 BOOKABLE conference rooms</h4>
            <h4>5 BREAKOUT BOOTHS</h4>
            <hr className="border mb-5 d-md-none" />
          </div>
          <div className="mlist col-md-4 mt-5">
            <h4>24/7 access</h4>
            <h4>2 phone booths</h4>
            <h4>PRINT CENTER</h4>
            <h4>kitchenette</h4>
            <hr className="border mb-5 d-md-none" />
          </div>
        </div>
      </RowSection>

      {/* ---------------------------------------------------------------------------------------- */}
      <RowSection height="85vh" image="./assets/images/coworking.jpg">
        <div className="text-center text-white">
          <h2 style={{ marginTop: "5rem", fontSize: "11rem" }}>
            let's work
            <br />
            together
          </h2>
        </div>
        <div className="text-center">
          <MyButton overRide={true}>Join</MyButton>
        </div>
      </RowSection>

      {/* ---------------------------------------------------------------------------------------- */}
      <Footer />
      {/* ---------------------------------------------------------------------------------------- */}
    </div>
  );
}
