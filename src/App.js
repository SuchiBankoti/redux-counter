import React from "react";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./Redux-Comp/Reducer";
import Bar from "./Components/Bar";

const initialStore = { count: 0, name: "suchi" };
const store = createStore(reducer, initialStore);

function App() {
  return (
    <Provider store={store}>
      <Bar />
    </Provider>
  );
}

export default App;
