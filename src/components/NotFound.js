import React from "react";
import RowSection from "./RowSection";
import notFound from "./images/404-error-page-not-found.jpg";

export default function NotFound() {
  return (
    <React.Fragment>
      <RowSection height="100vh" image={notFound} />
    </React.Fragment>
  );
}
