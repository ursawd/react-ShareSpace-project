import React, { Fragment } from "react";
import { Button } from "reactstrap";
import sscolors from "../sscolors";

export default function MyButton(props) {
  const { bgColor = sscolors.yellow } = props;
  const style = {
    backgroundColor: bgColor,
    fontFamily: "Bebas Neue",
    padding: "1rem 3rem",
    color: "black",
  };
  if (bgColor === sscolors.ltblue) style.color = "white";
  return (
    <Fragment>
      <Button className="fs-2" style={style}>
        {props.children}
      </Button>
    </Fragment>
  );
}
