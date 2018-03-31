import React from "react";

import ACTIVITIES from "../data/activities.js";
import CardList from "./shared/CardList";
import { WomanBiking } from "./shared/EmojiLabels";

export default () => (
  <CardList title={<WomanBiking label="What to Do?" />} items={ACTIVITIES} />
);
