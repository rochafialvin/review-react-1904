import React from "react";

export default function Reusable(props) {
  return (
    <button
      style={{
        padding: 9,
        border: "1px solid",
        borderRadius: 5,
        fontWeight: "bold",
        fontSize: 20,
      }}
      {...props}
    >
      {props.children}
    </button>
  );
}
