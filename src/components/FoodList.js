import React from "react";

import CardList from "./shared/CardList";
import FOOD from "../data/food.js";

export default ({ LabelComponent, sectionLabel }) => (
  <CardList title={<LabelComponent label={sectionLabel} />} items={FOOD} />
);
