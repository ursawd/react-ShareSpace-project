import React from "react";
import RowSection from "./RowSection";
import NavBar from "./NavBar";
import Footer from "./Footer";
import mainImage from "./images/open-office-main.jpeg";
import suitsImage from "./images/coworkingsuites.jpg";
import sscolors from "../sscolors";
import MyButton from "./MyButton";

export default function Main() {
  return (
    <div>
      <RowSection height="75vh" image={mainImage}>
        <NavBar />
      </RowSection>
      <RowSection height="40vh" bColor={sscolors.yellow}>
        <div>
          <h3>LETS WORK TOGETHER</h3>
          <MyButton bgColor={sscolors.ltblue}>SIGN ME UP</MyButton>
        </div>
      </RowSection>
      <RowSection height="110vh">
        <h3>MEMBERSHIP TYPES</h3>
      </RowSection>
      <RowSection height="90vh" image={suitsImage}>
        <h3>SUITES</h3>
      </RowSection>
      <RowSection height="120vh" bColor={sscolors.ltblue}>
        <h3>What Our Members Think</h3>
      </RowSection>
      <RowSection height="120vh">
        <h3>we can’t wait to meet you</h3>
      </RowSection>
      <Footer />
    </div>
  );
}
