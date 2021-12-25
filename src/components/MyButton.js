import React, { Fragment } from "react";
import { Button } from "reactstrap";
import sscolors from "../sscolors";
import swal from "@sweetalert/with-react";

export default function MyButton(props) {
  const { bgColor = sscolors.yellow, overRide = null } = props;
  const style = {
    backgroundColor: bgColor,
    fontFamily: "Bebas Neue",
    padding: "1rem 3rem",
    color: "black",
  };

  if (overRide) {
    style.backgroundColor = "#EEC320";
  } else {
    if (window.location.href.includes("suites") || window.location.href.includes("dropin")) {
      style.backgroundColor = sscolors.ltblue;
    }
    if (style.backgroundColor === sscolors.ltblue) style.color = "white";
  }

  return (
    <Fragment>
      <Button onClick={() => swal("This functionality is not yet implemented")} className="fs-2 " style={style}>
        {props.children}
      </Button>
    </Fragment>
  );
}
