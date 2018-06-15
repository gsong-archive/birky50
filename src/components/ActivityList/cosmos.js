//@flow strict
import React from "react";

import ActivityList from "./index";
import { WindowSizeProvider } from "../../contexts/WindowSizeContext";

export default () => (
  <WindowSizeProvider>
    <ActivityList />
  </WindowSizeProvider>
);
