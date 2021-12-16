import React from "react";
import RowSection from "./RowSection";
import NavBar from "./NavBar";
import Footer from "./Footer";
import mainImage from "./images/open-office-main.jpeg";

export default function Main() {
  return (
    <div>
      <RowSection height="75vh" bColor="#00B8B8" image={mainImage}>
        <NavBar />
      </RowSection>
      <RowSection height="40vh">
        <div>
          <h3>RowSectionChild</h3>
          <p> lorem ipsum </p>
          <button>Membership</button>
        </div>
      </RowSection>
      <Footer />
    </div>
  );
}
