import React from "react";
import RowSection from "./RowSection";
import NavBar from "./NavBar";
import Footer from "./Footer";
import mainImage from "./images/open-office-main.jpeg";
import suitsImage from "./images/coworkingsuites.jpg";
import sscolors from "../sscolors";
import MyButton from "./MyButton";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";

export default function Main() {
  return (
    <div>
      {/* ---------------------------------------------------------------------------------------- */}
      <RowSection height="75vh" image={mainImage}>
        <NavBar />
      </RowSection>
      {/* ---------------------------------------------------------------------------------------- */}
      <RowSection height="40vh" bColor={sscolors.yellow}>
        <div className="col-md-6">
          <h2 className="display-2 mt-5 ps-4">LET'S WORK TOGETHER</h2>
        </div>
        <div className="col-md-6 mb-5">
          <p className="fs-5 mt-5 pe-4">
            Fellow Coworking is a shared office space designed to foster great work and build community. Ideal for solo
            workers, growing your business, or starting a new one.
          </p>
          <MyButton bgColor={sscolors.ltblue}>SIGN ME UP</MyButton>
        </div>
      </RowSection>
      {/* ---------------------------------------------------------------------------------------- */}
      <RowSection height="110vh">
        <h2>MEMBERSHIP TYPES</h2>
      </RowSection>
      {/* ---------------------------------------------------------------------------------------- */}
      <RowSection height="100vh" image={suitsImage}>
        <h2 className=" text-center yellow" style={{ fontSize: "10rem", paddingTop: "6rem" }}>
          SUITES
        </h2>
        <h3 className="display-5 yellow text-center mt-2">Private, Lockable, and perfect for a small team</h3>
        <div className="mt-5 pt-5 text-center">
          <MyButton>Availablity</MyButton>
        </div>
      </RowSection>
      {/* ---------------------------------------------------------------------------------------- */}
      <RowSection height="130vh" bColor={sscolors.ltblue}>
        <div className="text-white">
          <h3 className="display-2 mt-5 pt-5 text-center">What Our Members Think OF SHARESPACE</h3>
        </div>

        <div className="row fs-5 text-white mt-5 justify-content-center">
          <div className="col-lg-3">
            <Card className="text-center border-0" style={{ backgroundColor: sscolors.ltblue }}>
              <CardBody>
                <CardText>
                  “I've worked at several different coworking spaces over the years... Fellow HITS DIFFERENT. Super
                  friendly staff... clean (and quiet) environment... awesome network of people. 10/10 would recommend.”
                </CardText>
                <CardTitle className="fs-3">John Doe</CardTitle>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-3">
            <Card className="text-center border-0" style={{ backgroundColor: sscolors.ltblue }}>
              <CardBody>
                <CardText>
                  “Fellow provides such a welcoming space for the independent worker, while simultaneously creating
                  space for networking and collaboration! We love our Building second floor neighbors!”
                </CardText>
                <CardTitle className="fs-3">Jane Doe</CardTitle>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-3">
            <Card className="text-center border-0" style={{ backgroundColor: sscolors.ltblue }}>
              <CardBody>
                <CardText>
                  “Great coworking spot - convenient location downtown, a warm space that has areas for focus,
                  creativity, collaboration and quiet work. Whatever you need to get through your work day is here.”
                </CardText>
                <CardTitle className="fs-3">Json Steele</CardTitle>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="text-center fs-5 text-white mt-5">
          <Card className="border-0" style={{ backgroundColor: sscolors.ltblue }}>
            <CardBody>
              <CardText>
                “Fellow is an amazing community. I am an “older” convert to the gig-economy and came across Fellow a
                couple of years ago when I realized working from home was not going to work. The work space is both open
                and bounded; giving you the creative felling of working in community, but still offering the structure
                to get stuff done. The intentional thought that goes into this balance at Fellow is remarkable. The fact
                they have a full-time community liaison on staff makes a huge difference; always working to make my
                experience better (as well as tending to the collective). I recommend this place highly to anyone
                looking for an affordable, creative, and fun place to do what you do when and how you want to do it.
              </CardText>
              <CardText>
                It is kind of everything I want in a work space and none of the things I do not want. Good people to
                work with, a creative environment and good coffee 24/7. #Fellowworks!”
              </CardText>
              <CardTitle className="fs-3">Jesse James</CardTitle>
            </CardBody>
          </Card>
        </div>
      </RowSection>
      {/* ---------------------------------------------------------------------------------------- */}
      <RowSection height="120vh">
        <h3>we can’t wait to meet you</h3>
      </RowSection>
      {/* ---------------------------------------------------------------------------------------- */}
      <Footer />
    </div>
  );
}
