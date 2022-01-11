// Melakukan konfigurasi yang berguna untuk menghubungkan locker dengan reducer
import { combineReducers } from "redux";

import reducerA from "./reducer-a";
import reducerB from "./reducer-b";
import reducerC from "./reducer-c";

// export daftar reducer berikut dengan lockernya masing - masing
export default combineReducers({
  lockerA: reducerA,
  lockerB: reducerB,
  lockerC: reducerC,
});
