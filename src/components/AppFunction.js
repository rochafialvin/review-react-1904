import { useState, useEffect } from "react";

import Child from "./Child";
import Reusable from "./Reusable";

function AppFunction() {
  const [state, setState] = useState({
    day: "Holiday",
    year: 2021,
    isLoading: false,
    isStorageChecked: false,
    childStation: "",
    showChild: false,
  });

  const getStation = (station) => {
    setState({ ...state, childStation: station });
  };

  // const [number, setNumber] = useState(1);

  // running hanya satu kali setelah render pertama
  // useEffect(() => {
  //   console.log("Use Effect like a componentDidMount");
  // }, []);

  // running setiap ada state yang berubah
  // useEffect(() => {
  //   console.log("Use Effect like a componentDidUpdate");
  // });

  // const onChangeClick = () => {
  //   // spread operator
  //   setState({ ...state, day: "Sunday" });
  //   setState({ ...state, day: "Sunday", year: 2022 });
  //   setState({ ...state, isLoading: true });
  // };

  // const onUpdateClick = () => {
  //   setNumber((prevNumber) => {
  //     return prevNumber + 2;
  //   });
  // };

  /*
    <h2> state : {JSON.stringify(state)} </h2>
      {state.showChild ? (
        <Child day={state.day} year={state.year} getStation={getStation} />
      ) : null}
  */

  return (
    <div>
      <h1>App Function Component</h1>
      <Reusable
        onClick={() => {
          alert("Tombol Push di tekan");
        }}
      >
        Push Alert
      </Reusable>

      <Reusable
        onClick={() => {
          console.log("Hello everyone");
        }}
      >
        Push Console
      </Reusable>
    </div>
  );
}

export default AppFunction;
