import React from "react";

import Header from "../Header";
import { WindowSizeProvider } from "../../contexts/WindowSizeContext";

export default () => (
  <WindowSizeProvider>
    <Header />
  </WindowSizeProvider>
);
