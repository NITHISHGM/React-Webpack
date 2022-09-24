import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";

import "antd/dist/antd.css";

import "../scss/styles.scss";

var mountNode = document.getElementById("app");
const root = createRoot(mountNode);
root.render(
  <>
    {" "}
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
