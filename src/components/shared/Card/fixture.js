//@flow
import { createFixture } from "react-cosmos-flow/fixture";

import { generate } from "testUtils";

import Card from "./index";

const completeCard = generate.card();
const noPriceCard = Object.assign(generate.card(), { price: undefined });
const noPhoneCard = Object.assign(generate.card(), { phone: undefined });
const noPricePhoneCard = Object.assign(generate.card(), {
  price: undefined,
  phone: undefined,
});

export default [
  createFixture({
    name: "Complete data",
    component: Card,
    props: completeCard,
  }),
  createFixture({
    name: "No price",
    component: Card,
    props: noPriceCard,
  }),
  createFixture({
    name: "No phone",
    component: Card,
    props: noPhoneCard,
  }),
  createFixture({
    name: "No price & phone",
    component: Card,
    props: noPricePhoneCard,
  }),
];
