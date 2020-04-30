import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; //First example
import App2 from "./App2";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <App2 title={<h1 className="title">GITHUB CARDS</h1>} />,
  document.getElementById("root")
);
serviceWorker.unregister();
