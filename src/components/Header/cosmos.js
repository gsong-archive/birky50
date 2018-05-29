//@flow strict
import React from "react";

import Header from "./index";
import { WindowSizeProvider } from "../../contexts/WindowSizeContext";

export default () => (
  <WindowSizeProvider>
    <Header />
  </WindowSizeProvider>
);
