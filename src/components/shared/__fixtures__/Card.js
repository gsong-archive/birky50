import { generate } from "testUtils";

import Card from "../Card";

const completeCard = generate.card();
const noPriceCard = Object.assign(generate.card(), { price: undefined });
const noPhoneCard = Object.assign(generate.card(), { phone: undefined });
const noPricePhoneCard = Object.assign(generate.card(), {
  price: undefined,
  phone: undefined,
});

export default [
  {
    name: "Complete data",
    component: Card,
    props: completeCard,
  },
  {
    name: "No price",
    component: Card,
    props: noPriceCard,
  },
  {
    name: "No phone",
    component: Card,
    props: noPhoneCard,
  },
  {
    name: "No price & phone",
    component: Card,
    props: noPricePhoneCard,
  },
];
