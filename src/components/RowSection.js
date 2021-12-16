import React from "react";

export default function RowSection(props) {
  const style = {
    minHeight: props.height,
    backgroundColor: props.bColor,
    backgroundImage: `url(${props.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };
  return (
    <div style={style} className="container-fluid">
      <div className="row">{props.children}</div>
    </div>
  );
}
