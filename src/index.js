import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GlobelContext from "./context";

ReactDOM.render(
  <GlobelContext>
    <App />
  </GlobelContext>,

  document.getElementById("root")
);
