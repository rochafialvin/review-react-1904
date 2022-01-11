import { createStore } from "redux";

import reducers from "./reducers";

// membuat store berdasarkan "daftar" yang sudah dibuat yaitu "reducers"
// export product jadi dari redux (store)
export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
