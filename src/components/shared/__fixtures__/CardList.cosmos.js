//@flow strict
import React from "react";

import CardListImpl from "../CardList";
import { WindowSizeProvider } from "../../../contexts/WindowSizeContext";

import type { Props } from "../CardList";

const CardList = (props: Props) => (
  <WindowSizeProvider>
    <CardListImpl {...props} />
  </WindowSizeProvider>
);

export default CardList;
