//@flow strict
import React from "react";

import ACTIVITIES from "../data/activities.js";
import CardList from "./shared/CardList";

import type { Props } from "./SectionTypes";

export default ({ LabelComponent, sectionLabel }: Props) => (
  <CardList
    title={<LabelComponent label={sectionLabel} />}
    items={ACTIVITIES}
  />
);
