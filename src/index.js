import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

if (process.env.NODE_ENV === "development") {
  const { registerObserver } = require("react-perf-devtool");
  registerObserver();
}

ReactDOM.render(<App />, window.root);
