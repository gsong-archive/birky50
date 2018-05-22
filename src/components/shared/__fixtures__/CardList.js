//@flow
import React from "react";

import { createFixture } from "react-cosmos-flow/fixture";

import { generate } from "testUtils";

import CardList from "./CardList.cosmos";
import { Burger } from "../EmojiLabels";

export default [
  createFixture({
    name: "With EmojiLabel title",
    description: "`title` prop is a React node.",
    component: CardList,
    props: {
      title: <Burger label={generate.words()} />,
      items: [...Array(5)].map(() => generate.card()),
    },
  }),
  createFixture({
    name: "With text title",
    component: CardList,
    props: {
      title: generate.words(),
      items: [...Array(5)].map(() => generate.card()),
    },
  }),
];
