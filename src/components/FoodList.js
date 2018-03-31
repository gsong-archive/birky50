import React from "react";

import CardList from "./shared/CardList";
import FOOD from "../data/food.js";
import { Burger } from "./shared/EmojiLabels";

export default () => (
  <CardList title={<Burger label="Where to Eat?" />} items={FOOD} />
);
