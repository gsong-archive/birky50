//@flow
import React from "react";

import { createFixture } from "react-cosmos-flow/fixture";

import { generate } from "testUtils";

import { Airplane, EmojiLabel } from "../EmojiLabels";
import { Link } from "../../../styles/components";

export default [
  createFixture({
    name: "Predefined EmojiLabel with text label",
    component: Airplane,
    props: { label: generate.words() },
  }),
  createFixture({
    name: "Predefined EmojiLabel with link label",
    description: "`label` prop is a React node.",
    component: Airplane,
    props: {
      label: <Link href={generate.url()}>{generate.words()}</Link>,
    },
  }),
  createFixture({
    name: "With text label",
    component: EmojiLabel,
    props: {
      emoji: "😜",
      ariaLabel: "stuck out tongue winking eye",
      label: generate.words(),
    },
  }),
  createFixture({
    name: "With link label",
    description: "`label` prop is a React node.",
    component: EmojiLabel,
    props: {
      emoji: "😜",
      ariaLabel: "stuck out tongue winking eye",
      label: <Link href={generate.url()}>{generate.words()}</Link>,
    },
  }),
];
