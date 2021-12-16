import React from "react";

export default function Button(props) {
  const style = {
    backgroundColor: "#EEC320",
  };
  return (
    <div>
      <button style={style} className="btn btn-lg py-3 px-4 fs-3">
        {props.btnText}
      </button>
    </div>
  );
}
