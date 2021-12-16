import React from "react";
import RowSection from "./RowSection";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Main() {
  return (
    <div>
      <RowSection height="50vh" bColor="#00B8B8">
        <NavBar />
      </RowSection>
      <RowSection height="40vh" bColor="lightgreen">
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
