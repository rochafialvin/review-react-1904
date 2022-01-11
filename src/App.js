import React from "react";

import Sender from "./components/Sender";
import RecieverOne from "./components/RecieverOne";
import RecieverTwo from "./components/RecieverTwo";

import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponent";

export default function App() {
  return (
    <div style={{ width: "80%", margin: "20px auto" }}>
      <Sender />
      <div style={{ display: "flex" }}>
        <RecieverOne />
        <RecieverTwo />
      </div>

      <div style={{ marginTop: "170px", display: "flex" }}>
        <ClassComponent />
        <FunctionComponent />
      </div>
    </div>
  );
}
