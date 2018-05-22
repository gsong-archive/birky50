//@flow
import React from "react";

import { createFixture } from "react-cosmos-flow/fixture";

import { generate } from "testUtils";

import SectionHeader from "../SectionHeader";
import { Airplane } from "../EmojiLabels";

export default [
  createFixture({
    name: "With EmojiLabel",
    component: SectionHeader,
    props: {
      children: <Airplane label={generate.words()} />,
    },
  }),
  createFixture({
    name: "With text label",
    component: SectionHeader,
    props: {
      children: generate.words(),
    },
  }),
];
