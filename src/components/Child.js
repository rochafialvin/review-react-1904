import React, { useState } from "react";

export default function Child(props) {
  const [station, setStation] = useState("Sudirman");

  const onLaunchDaClick = () => {
    props.getStation(station);
  };

  return (
    <div>
      <h1>Child Component</h1>
      <h2>state : {station}</h2>
      <h2>props : {JSON.stringify({ ...props })}</h2>
      <button onClick={onLaunchDaClick}>Launch da function</button>
    </div>
  );
}
