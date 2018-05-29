//@flow strict
import React from "react";

import ActivityList from "./index";
import { WindowSizeProvider } from "../../contexts/WindowSizeContext";

import type { Props } from "../Section.type";

export default (props: Props) => (
  <WindowSizeProvider>
    <ActivityList {...props} />
  </WindowSizeProvider>
);
