import React from "react";

import ACTIVITIES from "../data/activities.js";
import CardList from "./shared/CardList";

export default ({ LabelComponent, sectionLabel }) => (
  <CardList
    title={<LabelComponent label={sectionLabel} />}
    items={ACTIVITIES}
  />
);
