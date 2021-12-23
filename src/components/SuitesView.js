import React from "react";
import RowSection from "./RowSection";
import NavBar from "./NavBar";
import Footer from "./Footer";
import sscolors from "../sscolors";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import coworking from "./images/co-working-spaces-beach-bar-panama.jpg";
import MyButton from "./MyButton";

export default function SuitesView() {
  return (
    <div>
      {/* ---------------------------------------------------------------------------------------- */}
      <RowSection height="100vh" bColor={sscolors.yellow}>
        <NavBar />
      </RowSection>
    </div>
  );
}
