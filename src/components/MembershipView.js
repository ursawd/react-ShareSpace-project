import React from "react";
import RowSection from "./RowSection";
import NavBar from "./NavBar";
import Footer from "./Footer";
import sscolors from "../sscolors";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";

export default function MembershipView() {
  return (
    <div>
      {/* ---------------------------------------------------------------------------------------- */}
      <RowSection height="110vh" bColor={sscolors.ltblue}>
        <NavBar />
      </RowSection>
      {/* ---------------------------------------------------------------------------------------- */}
      <Footer />
    </div>
  );
}
