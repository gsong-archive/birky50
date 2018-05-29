//@flow strict
import React from "react";

import CardListImpl from "./index";
import { WindowSizeProvider } from "../../../contexts/WindowSizeContext";

import type { Props } from "./index";

const CardList = (props: Props) => (
  <WindowSizeProvider>
    <CardListImpl {...props} />
  </WindowSizeProvider>
);

export default CardList;
