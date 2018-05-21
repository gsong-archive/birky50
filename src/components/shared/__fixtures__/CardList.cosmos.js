import React from "react";

import CardList from "../CardList";
import { WindowSizeProvider } from "../../../contexts/WindowSizeContext";

export default props => (
  <WindowSizeProvider>
    <CardList {...props} />
  </WindowSizeProvider>
);
