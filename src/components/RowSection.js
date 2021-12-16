import React from "react";

export default function RowSection(props) {
  const style = { minHeight: props.height, backgroundColor: props.bColor };
  return (
    <div style={style} className="container-fluid">
      <div className="row">{props.children}</div>
    </div>
  );
}
