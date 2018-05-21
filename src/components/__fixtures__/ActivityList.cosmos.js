import React from "react";

import ActivityList from "../ActivityList";
import { WindowSizeProvider } from "../../contexts/WindowSizeContext";

export default props => (
  <WindowSizeProvider>
    <ActivityList {...props} />
  </WindowSizeProvider>
);
