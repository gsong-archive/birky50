//@flow strict
import React from "react";

import CardList from "./shared/CardList";
import LODGINGS from "../data/lodgings.js";

import type { Props } from "./Section.type";

export default ({ LabelComponent, sectionLabel }: Props) => (
  <CardList title={<LabelComponent label={sectionLabel} />} items={LODGINGS} />
);
