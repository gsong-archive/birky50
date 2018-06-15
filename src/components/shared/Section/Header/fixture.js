//@flow
import React from "react";

import { createFixture } from "react-cosmos-flow/fixture";

import { generate } from "testUtils";

import SectionHeader from "./index";
import { Airplane } from "../../EmojiLabels";

export default [
  createFixture({
    name: "With EmojiLabel",
    description: "`children` prop is a React node.",
    component: SectionHeader,
    props: {
      color: "red",
      children: <Airplane label={generate.words()} />,
    },
  }),
  createFixture({
    name: "With text label",
    component: SectionHeader,
    props: {
      color: "blue",
      children: generate.words(),
    },
  }),
];
