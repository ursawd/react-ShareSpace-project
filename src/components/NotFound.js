import React from "react";
import RowSection from "./RowSection";
import notFound from "./images/404-error-page-not-found.jpg";
import NavBar from "./NavBar";

export default function NotFound() {
  return (
    <React.Fragment>
      <RowSection height="100vh" image={notFound}>
        <NavBar />
        <h3>Please check the address bar to insure you have requested the proper url</h3>
      </RowSection>
    </React.Fragment>
  );
}
