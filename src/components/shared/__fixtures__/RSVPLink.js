//@flow
import { createFixture } from "react-cosmos-flow/fixture";
import { css } from "emotion";

import RSVPLink from "../RSVPLink";

export default [
  createFixture({
    name: "Default",
    component: RSVPLink,
  }),
  createFixture({
    name: "Specify width",
    component: RSVPLink,
    props: { width: "50%" },
  }),
  createFixture({
    name: "Override with CSS class",
    component: RSVPLink,
    props: {
      className: css`
        font-style: oblique;
        background-color: green;
        padding: 1.25rem 1.5rem;
      `,
    },
  }),
];
