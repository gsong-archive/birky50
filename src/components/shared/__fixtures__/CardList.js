import React from "react";

import { generate } from "testUtils";

import CardList from "./CardList.cosmos";
import { Burger } from "../EmojiLabels";

export default [
  {
    name: "With EmojiLabel title",
    component: CardList,
    props: {
      title: <Burger label={generate.words()} />,
      items: [...Array(5)].map(() => generate.card()),
    },
  },
  {
    name: "With text title",
    component: CardList,
    props: {
      title: generate.words(),
      items: [...Array(5)].map(() => generate.card()),
    },
  },
];
