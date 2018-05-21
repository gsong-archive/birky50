import React from "react";

import { generate } from "testUtils";

import { Airplane, EmojiLabel } from "../EmojiLabels";
import { Link } from "../../../styles/components";

export default [
  {
    name: "Predefined EmojiLabel with text label",
    component: Airplane,
    props: { label: generate.words() },
  },
  {
    name: "Predefined EmojiLabel with link label",
    component: Airplane,
    props: {
      label: <Link href={generate.url()}>{generate.words()}</Link>,
    },
  },
  {
    name: "With text label",
    component: EmojiLabel,
    props: {
      emoji: "😜",
      ariaLabel: "stuck out tongue winking eye",
      label: generate.words(),
    },
  },
  {
    name: "With link label",
    component: EmojiLabel,
    props: {
      emoji: "😜",
      ariaLabel: "stuck out tongue winking eye",
      label: <Link href={generate.url()}>{generate.words()}</Link>,
    },
  },
];
