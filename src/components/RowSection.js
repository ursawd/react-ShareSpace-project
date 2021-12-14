import React from "react";

export default function RowSection(props) {
  const style = { height: props.height, backgroundColor: props.bColor };
  return (
    <div style={style}>
      <h2>RowSection Component</h2>
    </div>
  );
}
