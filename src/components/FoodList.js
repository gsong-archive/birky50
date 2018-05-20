//@flow strict
import React from "react";

import CardList from "./shared/CardList";
import FOOD from "../data/food.js";

import type { Props } from "./SectionTypes";

export default ({ LabelComponent, sectionLabel }: Props) => (
  <CardList title={<LabelComponent label={sectionLabel} />} items={FOOD} />
);
