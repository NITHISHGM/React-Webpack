import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "../scss/styles.scss";
import { createRoot } from "react-dom/client";

var mountNode = document.getElementById("app");
const root = createRoot(mountNode);
root.render(<App name="Jane" />);
