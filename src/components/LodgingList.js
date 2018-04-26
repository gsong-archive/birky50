import React from "react";

import CardList from "./shared/CardList";
import LODGINGS from "../data/lodgings.js";

export default ({ LabelComponent, sectionLabel }) => (
  <CardList title={<LabelComponent label={sectionLabel} />} items={LODGINGS} />
);
