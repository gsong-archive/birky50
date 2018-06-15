//@flow strict
import * as React from "react";

import type { LabelComponent } from "./shared/EmojiLabels";

export type Props = {};

export type SectionDatum = {
  id: string,
  navLabel: string,
  sectionLabel: string,
  sectionTag?: string,
  SectionComponent: React.ComponentType<Props>,
  LabelComponent: LabelComponent,
  color: string,
};

export type SectionData = Array<SectionDatum>;
