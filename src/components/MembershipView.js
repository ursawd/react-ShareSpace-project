import React from "react";
import RowSection from "./RowSection";
import NavBar from "./NavBar";
import Footer from "./Footer";
import sscolors from "../sscolors";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import coworking from "./images/co-working-spaces-beach-bar-panama.jpg";
import MyButton from "./MyButton";

const CircleLogo = ({ fgnd, bgnd, text }) => {
  const style = {
    height: "225px",
    width: "225px",
    fontSize: "10rem",
    backgroundColor: bgnd,
    borderRadius: "50%",
    textAlign: "center",
    paddingTop: 0,
    color: fgnd,
    margin: "auto",
  };
  if (text.length > 3) {
    style.fontSize = "7rem";
    style.paddingTop = "2rem";
  }
  return <div style={style}>{text}</div>;
};

const LogosCard = ({ fgnd, bgnd, text, title, text1, text2 }) => {
  return (
    <div className="text-center" style={{ width: "450px" }}>
      <Card className="border-0">
        <CircleLogo fgnd={fgnd} bgnd={bgnd} text={text} />
        <CardBody>
          <CardTitle className="fs-3">{title}</CardTitle>
          <CardText className="lead">{text1}</CardText>
          <CardText className="lead">{text2}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};
export default function MembershipView() {
  return (
    <div>
      {/* ---------------------------------------------------------------------------------------- */}
      <RowSection height="130vh" bColor={sscolors.ltblue}>
        <NavBar />
        <div className="text-white text-center">
          <h1 style={{ fontSize: "11rem" }} className="mx-5 d-none d-md-block p-5">
            MEMBERSHIPS
          </h1>
          <h1 style={{ fontSize: "3rem" }} className="mx-5 d-md-none p-5">
            MEMBERSHIPS
          </h1>
          <p style={{ fontSize: "1.2rem" }}>
            Amenities that come with <span className="strong">every</span> in-person membership.
          </p>
        </div>
        <div className="row text-center text-white mt-5 p-5 ">
          <div className="mlist col-md-4 ">
            <h4>3 PARKING OPTIONS</h4>
            <h4>unlimited COFFEE + TEA</h4>
            <h4>FULL KITCHEN</h4>
            <hr className="border mb-5 d-md-none" />
          </div>
          <div className="mlist col-md-4">
            <h4>access to 2500 sq. ft. of workspace</h4>
            <h4>
              super fast wifi
              <br />
              322.26 download mbps / 34.71 upload mbps
            </h4>
            <h4>4 BOOKABLE conference rooms</h4>
            <h4>5 BREAKOUT BOOTHS</h4>
            <hr className="border mb-5 d-md-none" />
          </div>
          <div className="mlist col-md-4">
            <h4>2 phone booths</h4>
            <h4>PRINT CENTER</h4>
            <h4>kitchenette</h4>
            <hr className="border mb-5 d-md-none" />
          </div>
        </div>
      </RowSection>
      {/* ---------------------------------------------------------------------------------------- */}
      <RowSection height="160vh">
        <div className="d-flex flex-wrap justify-content-center gap-5 mt-5 pt-5">
          <div className="">
            <LogosCard
              fgnd="white"
              bgnd="#EEC320"
              text="1"
              title="1 DAY/WEEK"
              text1="$70 per month"
              text2="Drop by for 1 day / week from 8am - 6pm. This includes access to all of our Fellow amenities, and 1 hour of conference room time per week."
            />
          </div>
          <div className="">
            <LogosCard
              fgnd="white"
              bgnd="#00B8B8"
              text="2"
              title="2 DAYS/WEEK"
              text1="$130 per month"
              text2="Drop by for 2 days / week from 8am - 6pm, and get access to all of our Fellow amenities; including 2 hours of conference room time per week."
            />
          </div>
          <div className="">
            <LogosCard
              fgnd="white"
              bgnd="#8F3759"
              text="24/7"
              title="1 DAY/WEEK"
              text1="$300 per month"
              text2="24/7 means 24/7, folks. Receive 24/7 access to Fellow’s space and its amenities, and book 5 hours of conference room time per week."
            />
          </div>
          <div className="">
            <LogosCard
              fgnd="white"
              bgnd="#101010"
              text="VO"
              title="VIRTUAL OFFICE"
              text1="$50 per month"
              text2="Let us worry about your mail. Use our address as your business address, receive scanned copies of your mail, and store that mail at Fellow for pickup at your leisure. "
            />
          </div>
          <div className="">
            <LogosCard
              fgnd="#EEC320"
              bgnd="#101010"
              text="VO+"
              title="VIRTUAL OFFICE PLUS"
              text1="$80 per month"
              text2="Get everything in the virtual office membership, and you visit us once a month from 8am - 6pm. Feel free to book a conference room for 1 hour while you visit!"
            />
          </div>
          <div className="">
            <LogosCard
              fgnd="black"
              bgnd="#D1F6FF"
              text="PD"
              title="PERMANENT DESK"
              text1="$375 per month"
              text2="Bring your stuff and leave it at your designated desk. Receive 24/7 access to Fellow and all of its amenities, including 5 hours of conference room time per week. "
            />
          </div>
        </div>
      </RowSection>
      {/* ---------------------------------------------------------------------------------------- */}

      <RowSection height="60vh" bColor={sscolors.ltblue}>
        <div className="row text-white justify-content-around">
          <div className="col-md-3 mt-5 pt-5">
            <h2>STUDENT DISCOUNT</h2>
            <p className="lead pt-5">
              We’d love to help offset your education costs. Let us know, and you’ll receive 10% off your membership!
            </p>
          </div>
          <div className="col-md-3 mt-5 pt-5">
            <h2>NEW BUSINESS DISCOUNT</h2>
            <p className="lead pt-5">
              If you haven’t worked in Fellow before, bring in a copy of your new business license, and you’ll receive
              10% off your membership (excluding suites) for your first year at ShareSpace!
            </p>
          </div>
          <div className="col-md-3 mt-5 pt-5">
            <h2>NON-PROFIT DISCOUNT</h2>
            <p className="lead pt-5">
              We want to support the people who support Spokane. 501c3 Nonprofit Organizations get 10% off of their
              memberships at Fellow.
            </p>
          </div>
        </div>
      </RowSection>
      {/* ---------------------------------------------------------------------------------------- */}
      <RowSection height="90vh" image={coworking}>
        <div className="text-center">
          <h2 style={{ fontSize: "11rem", color: "white", paddingTop: "7rem" }}>
            let's work
            <br />
            together
          </h2>

          <MyButton>JOIN</MyButton>
        </div>
      </RowSection>

      {/* ---------------------------------------------------------------------------------------- */}

      <Footer />
    </div>
  );
}
