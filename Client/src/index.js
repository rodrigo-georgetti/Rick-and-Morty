// * React
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// * React-Redux
import { Provider } from "react-redux";
// * Redux
import store from "./redux/store";
// * App
import App from "./App";
// * Styles
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
