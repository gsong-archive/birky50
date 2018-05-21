import React from "react";

import { generate } from "testUtils";

import SectionHeader from "../SectionHeader";
import { Airplane } from "../EmojiLabels";

export default [
  {
    name: "With EmojiLabel",
    component: SectionHeader,
    props: {
      children: <Airplane label={generate.words()} />,
    },
  },
  {
    name: "With text label",
    component: SectionHeader,
    props: {
      children: generate.words(),
    },
  },
];
