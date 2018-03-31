import React from "react";

import CardList from "./shared/CardList";
import LODGINGS from "../data/lodgings.js";
import { Hotel } from "./shared/EmojiLabels";

export default () => (
  <CardList title={<Hotel label="Where to Stay?" />} items={LODGINGS} />
);
