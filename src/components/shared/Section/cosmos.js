//@flow
import React from "react";

import Section from "./index";
import { WindowSizeProvider } from "../../../contexts/WindowSizeContext";

import type { Props } from "./index";

export default (props: Props) => (
  <WindowSizeProvider>
    <Section {...props} />
  </WindowSizeProvider>
);
